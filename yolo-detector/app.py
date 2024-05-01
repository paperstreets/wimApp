from flask import Flask, render_template, request, send_from_directory
import subprocess
import os
import shutil
import zipfile

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/detect', methods=['POST'])
def detect():
    # Получите загруженные изображения из запроса
    uploaded_files = request.files.getlist('file')

    # Создайте временную директорию для сохранения файлов
    os.makedirs('temp', exist_ok=True)

    # Сохраните загруженные изображения
    for i, file in enumerate(uploaded_files):
        file.save(os.path.join('temp', f'input_image_{i}.jpg'))

    detection_results = []  # Список для хранения результатов обнаружения для каждого изображения

    # Запустите процесс обнаружения объектов для каждого изображения
    for i, file in enumerate(uploaded_files):
        command = [
            'python',
            'yolov5/detect.py',
            '--source', f'temp/input_image_{i}.jpg',
            '--name', f'output_{i}',
            '--weights', 'wheel_detector.pt',
            '--conf-thres', '0.3',
            '--iou-thres', '0.4',
            '--save-txt',
            '--hide-label'
        ]
        subprocess.run(command)

        # Считайте файлы с результатами обнаружения и подсчитайте количество классов
        with open(f'yolov5/runs/detect/output_{i}/labels/input_image_{i}.txt', 'r') as f:
            lines = f.readlines()
            class_count = len(lines)

        # Добавьте информацию о количестве классов в результаты обнаружения
        detection_results.append({'image': f'input_image_{i}', 'class_count': class_count})

    # Создайте путь для архива с результатами
    zip_file_path = os.path.join('static', 'Результати.zip')
    with zipfile.ZipFile(zip_file_path, 'w') as zipf:
        # Добавьте результаты обнаружения в архив
        for i, file in enumerate(uploaded_files):
            output_folder = f'yolov5/runs/detect/output_{i}'
            if os.path.exists(output_folder):
                for root, dirs, files in os.walk(output_folder):
                    for filename in files:
                        zipf.write(os.path.join(root, filename), os.path.relpath(os.path.join(root, filename), output_folder))

    # Удалите временную директорию
    shutil.rmtree('temp')

    # Верните пользователю ссылку на архив с результатами и информацию о количестве классов
    return render_template('result.html', detection_results=detection_results)
@app.route('/download/<path:filename>')
def download(filename):
    return send_from_directory('static', filename, as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)