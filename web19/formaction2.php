<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '匿名';
    $email = $_POST['email'] ?? '无邮箱';
    $message = $_POST['message'] ?? '无内容';

    // 保存数据到日志文件
    $logEntry = "姓名: $name, 邮箱: $email, 留言: $message\n";
    file_put_contents('form_log.txt', $logEntry, FILE_APPEND);

    // 返回处理结果，只返回感谢信息
    echo "谢谢你的留言，" . htmlspecialchars($name) . "！我们会尽快联系你。";
}
?>
