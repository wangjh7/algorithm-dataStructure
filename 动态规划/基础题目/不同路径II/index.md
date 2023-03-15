一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
![题目描述](https://code-thinking-1253855093.file.myqcloud.com/pics/20210111204901338.png)

示例1：
![示例1](https://assets.leetcode.com/uploads/2020/11/04/robot1.jpg)
- 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
- 输出：2
- 解释：3x3 网格的正中间有一个障碍物。
        从左上角到右下角一共有 2 条不同的路径：
        1. 向右 -> 向右 -> 向下 -> 向下
        2. 向下 -> 向下 -> 向右 -> 向右

示例2：
![示例2](https://assets.leetcode.com/uploads/2020/11/04/robot2.jpg)
- 输入：obstacleGrid = [[0,1],[0,0]]
- 输出：1
