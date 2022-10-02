function solve(input) {
    let list = listEdit();

    for (let cmd of input) {
        cmd = cmd.split(' ');
        let action = cmd[0];
        let text = cmd[1];

        if (action == 'add') {
            list.add(text);
        } else if (action == 'remove') {
            list.remove(text)
        } else if (action == 'print') {
            list.print();
        }

    }

    function listEdit() {
        let list = [];
    
        return {
            add : (string) => list.push(string),
            remove : (string) => {
                var i = 0;
                while (i < list.length) {
                  if (list[i] === string) {
                    list.splice(i, 1);
                  } else {
                    ++i;
                  }
                }
                return list;
            },
            print : () => console.log(`${list.join(',')}`)
        }
    }
}