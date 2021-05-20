module.exports = function (){
    return {
        add: function(...num) {
            let tempN = 0;
            for (let n of arguments){
                tempN +=n;
            }
            return tempN;
        },
        multiply: function(...num) {
            let tempN = 0;
            for (let n of arguments){
                tempN *=n;
            }
            return tempN;
        },
        square: function(num) {
            return num**2;
        },
        random: function(min, max) {
            let gt0 = Date.now();
            let gt1 = Date.now();
            let st0 = Number(gt0).toString();
            let st1 = Number(gt1).toString();
            let st = "";
            while(Date.now() <= gt0){/*do nothing*/}
            for(let i= st1.length-1;i>st0.length - 4 ;i--){
                st += st0[i];
                st += st1[i];
            }
            return min + parseInt(parseFloat(`0.${st}`) * (max - min));
        }
    }
};