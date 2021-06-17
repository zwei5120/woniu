- git init

- git add readme.txt

- git commit -m "本次提交信息"

- git status 查看当前状态（与上次相比较是否发生更改）

- git diff readme.txt  查看该文件中被修改的内容

- git log  查看git提交日志，可看到每次提交时书写的提交信息

- git log --pretty=oneline  将日志简化并一行显示

- git reset --hard HEAD^  将从当前状态（HEAD）向前回滚一次，多个^号可回滚到之前多个版本，也可使用HEAD~100，来向前回滚100个版本；
- 使用git log查看提交日志时，HEAD指向的就是当前版本；
- git reflog 查看命令历史；

#### 工作区

- 即日常使用的文件夹

#### 暂存区

- 使用git add命令将工作区中做修改的文件添加到暂存区

#### 本地master分支

- 即本地仓库，使用git commit可一次性将暂存区的多个文件提交到分支；

#### 测试修改追踪

- git只跟踪文件的修改（如增加问价、文件内部修改等），而非跟踪文件；
- 测试：文件A修改至B，此时git add添加到暂存区，再接着修改至C，此时git commit提交到分支； 分支中存在的是B，工作区存在的是C；
- 命令 git diff HEAD -- readme.txt 可查看工作区和分支中两个版本的区别；

#### 撤销修改

- 撤销修改：  git checkout -- readme.txt 
  - 修改发生在工作区，尚未添加到暂存区；
  - 文件已添加到暂存区，在工作区内又做出了修改；
  - 以上两种情况均可以使用该命令，使指定文件退回到最近一次提交或添加到暂存区时的状态；
- 文件已git add到暂存区，尚未commit提交；命令git reset HEAD <file> 可以将暂存区的修改撤销，重新放回工作区：即将暂存区的指定文件放回工作区，本次提交将不会提交该指定文件的修改；
  - 退回工作区后再使用git checkout -- file 即可撤回工作区的修改，回退到最近一次提交的状态；

#### 删除文件

- 工作区中删除文件，需要在分支中同步删除，通过git rm file  和  git commit -m "提交信息";可以将删除文件的操作同步到版本库；
- 工作区中误删文件，可以从版本库中恢复，使用命令git checkout -- file 可以恢复被删除的文件，但其版本是上次提交的版本了，这期间所做的修改就消失了；

### 远程仓库

#### 添加远程库

- 关联远程库：在github中创建新的仓库，在本地仓库文件夹中运行命令，将两个仓库关联起来；
  - git remote add origin git@github.com:zwei5120/woniu
- 将本地仓库推送到远程仓库：
  - git push -u origin master(首次推送时的命令，后面可简化)
  - git push origin master   (将本地master分支最新修改推送到远程仓库)
- 删除远程库：
  - git remote -v  查看远程库信息
  - git remote rm <name>  根据名字删除（此处的删除是解除了本地和远程的绑定关系，若要删除远程库，则需要在github上后台操作）
- 克隆远程库： git clone + 远程地址；
  - git clone git@github.com:zwei5120/woniu.git
- 





























