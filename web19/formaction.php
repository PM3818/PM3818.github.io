<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	//检查当前请求方法是否为 POST，确保只有通过 POST 方法提交的表单才会被处理。
    $name = $_POST['name'] ?? '匿名';
    $email = $_POST['email'] ?? '无邮箱';
    $message = $_POST['message'] ?? '无内容';
	//使用 PHP 的 $_POST 超全局数组获取表单提交的数据：
//$name 从表单中获取 name 字段的值，如果没有提供，则默认值为 '匿名'。
//$email 从表单中获取 email 字段的值，如果没有提供，则默认值为 '无邮箱'。
//$message 从表单中获取 message 字段的值，如果没有提供，则默认值为 '无内容'。

    // 保存数据到日志文件
    $logEntry = "姓名: $name, 邮箱: $email, 留言: $message\n";
	//将用户提交的信息格式化为一行日志条目，存储在 $logEntry 中。该格式为：姓名: 用户名, 邮箱: 用户邮箱, 留言: 用户留言。
    file_put_contents('form_log.txt', $logEntry, FILE_APPEND);
	//使用 file_put_contents 函数将 $logEntry 写入到名为 form_log.txt 的文件中：
//如果文件不存在，则会自动创建。
//使用 FILE_APPEND 标志表示将内容追加到文件末尾，而不是覆盖文件内容。

    // 返回处理结果，只返回感谢信息
    echo "谢谢你的留言，" . htmlspecialchars($name) . "！我们会尽快联系你。";
	//使用 echo 向用户返回一条感谢信息，内容为："谢谢你的留言，{用户姓名}！我们会尽快联系你。"：
//htmlspecialchars($name) 用于对用户的姓名进行 HTML 特殊字符转义，防止 XSS 攻击。
}
?>
