<?php
// 启用错误报告
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['uname'] ?? '未知用户';
    $password = $_POST['psw'] ?? '无密码';

    // 验证登录（这里只是示例，实际项目中需要更安全的验证）
    if (!empty($username) && !empty($password)) {
        // 确保文件路径正确
        $logFile = __DIR__ . 'login_log.txt';

        // 写入日志文件
        $logEntry = "用户: " . htmlspecialchars($username) . " 登录时间: " . date('Y-m-d H:i:s') . "\n";
        if (file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX) === false) {
            echo "日志写入失败，请检查文件权限或路径。";
        } else {
            echo "登录成功！日志已记录。";
        }
    } else {
        // 返回失败响应
        echo "登录失败，请检查用户名和密码。";
    }
}
?>

