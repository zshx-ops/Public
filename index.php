<?php  
// 获取当前目录下的文件列表  
$files = scandir('.');  
  
// 排除当前目录（.）和上级目录（..）  
$files = array_diff($files, array('.', '..'));  
  
// 生成跳转链接  
foreach ($files as $file) {  
    echo '<a href="' . $file . '">' . $file . '</a><br>';  
}  
?>
