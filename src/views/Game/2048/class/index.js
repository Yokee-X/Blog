const randomNumber = () => (Math.random() < 0.8 ? 2 : 4);
//棋盘
export default class Game2048 {
    size = 4;
    rows = this.size;
    cols = this.size;
    direction = null;
     moveFlag = false;//是否移动标志
    checkerboard = [
        // [0, 4, 8, 2],
        // [0, 0, 8, 4],
        // [0, 2, 0, 2],
        // [2, 0, 0, 4],
    ];
    constructor(props) {
        if (props?.size) this.size = props.size;
        this.init();
    }

    init() {
        this.checkerboard = Array.from({ length: this.size }, () => Array.from({ length: this.size }, () => 0));
        this.generateNum();
        return this.checkerboard
    }
    inRange(i, j) {
        return i >= 0 && i < this.size && j >= 0 && j < this.size;
    }
    gameover(){
        if(this.checkerboard.some(row=>row.some(chunk=>chunk===0)))  return false
        
        for(let i = 0;i<this.size;i++){
            for(let j = 0;j<this.size;j++){
                if(this.inRange(...this.next['up'](i,j))){
                    const [ni,nj] = this.next['up'](i,j)
                    if(this.checkerboard[ni][nj] == this.checkerboard[i][j]){
                        return false
                    }
                }
                if(this.inRange(...this.next['left'](i,j))){
                    const [ni,nj] = this.next['left'](i,j)
                    if(this.checkerboard[ni][nj] == this.checkerboard[i][j]){
                        return false
                    }
                }
            }
        }
        return true
    }
    // 移动
    changeBoard(direction) {
        this.direction = direction;
        for (let i = 0; i < this.size; i++) {
            switch (direction) {
                case "up":
                    this.cal(0, i);
                    break;
                case "down":
                    this.cal(this.size - 1, i);
                    break;
                case "left":
                    this.cal(i, 0);
                    break;
                case "right":
                    this.cal(i, this.size - 1);
                    break;
                default:
                    break;
            }
        }
    }
    move(direction){
        this.changeBoard(direction);
        if(this.moveFlag){
            this.generateNum();
        }
        this.moveFlag = false;
        return this.gameover()
    }
    generateNum() {
        // 类chunk使用
        // let emptyCells = that.checkerboard.reduce((acc, row) => {
        //     return acc.concat(row.filter(chunk => chunk === 0));
        // }, []);
        // if (emptyCells.length > 0) {
        //     let index = Math.floor(Math.random() * emptyCells.length);
        //     emptyCells[index] = randomNumber();
        // }
        let emptyCells = this.checkerboard.reduce((acc, row, i) => {
            let temp = [];
            row.forEach((chunk, j) => chunk === 0 && temp.push([i, j]));
            return acc.concat(temp);
        }, []);
        if (emptyCells.length > 0) {
            let num = emptyCells.length > (this.size ** 2 / 2) ? 2 : 1;
            while (num--) {
                let index = Math.floor(Math.random() * emptyCells.length);
                const [i, j] = emptyCells[index];
                this.checkerboard[i][j] = randomNumber();
            }
        }
    }
    next = {
        up: (i, j) => [i + 1, j],
        down: (i, j) => [i - 1, j],
        left: (i, j) => [i, j + 1],
        right: (i, j) => [i, j - 1],
    };
    //下一个坐标
    nextPos(i, j) {
        const [ni, nj] = this.next[this.direction](i, j);
        return this.inRange(ni, nj) ? [ni, nj] : null;
    }
    // 查找某个位置下一个非0的坐标  [r,c.v]
    nextNonZero(i, j) {
        const next = this.nextPos(i, j);
        if (!next) return null;
        const [ni, nj] = next;
        const value = this.checkerboard[ni][nj];
        if (value === 0) {
            return this.nextNonZero(ni, nj);
        }
        return [ni, nj, value];
    }
    //从当前位置开始处理某行或某列
    cal(i, j) {
        const next = this.nextNonZero(i, j);
        if (!next) return;
        const [ni, nj, nextValue] = next;

        const curVal = this.checkerboard[i][j];
        if (curVal === 0) {
            this.moveFlag = true
            this.checkerboard[i][j] = nextValue;
            this.checkerboard[ni][nj] = 0;
            this.cal(i, j);
        } else if (curVal === nextValue) {
            this.moveFlag = true
            this.checkerboard[i][j] *= 2;
            this.checkerboard[ni][nj] = 0;
        }
        this.cal(...this.nextPos(i, j));
    }
}

// 单个块
class Chunk {
    value = null;
    color = "#fff";
    constructor(value) {
        if (value) this.value = value;
        //    this.color = props.color
    }
    updated(value) {
        this.value = value;
    }
}
