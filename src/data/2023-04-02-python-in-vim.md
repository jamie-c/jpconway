---
title: "Run a Python Script In Vim"
date: 2023-04-02
---

Sometimes its useful, when editing a python script in vim, to quickly run the script to test the output. There are a million reasons to run a python script in vim, and it's easy to do it with the press of a key.

Here's the code to configure vim to run a python file that is in the current buffer with the press of the <kbd>F5</kbd> key.

<pre>
<code>
  &quot; Map the F5 key to run a Python script inside Vim.<br>
  &quot; We map F5 to a chain of commands here.<br>
  &quot; :w saves the file.<br>
  &quot; &lt;CR&gt; (carriage return) is like pressing the enter key.<br>
  &quot; !clear runs the external clear screen command.<br>
  &quot; !python3 % executes the current file with Python.<br>
  nnoremap &lt;f5&gt; :w &lt;CR&gt;:!clear &lt;CR&gt;:!python3 % &lt;CR&gt;<br>
</code> 
</pre>

If you add the above code to your .vimrc file, which should be located at ~/.vimrc, and have a python script open, pressing <kbd>F5</kbd> will save your file, clear the screen, and display the results of the python output. Getting back to your file is as simple as pressing Enter.
