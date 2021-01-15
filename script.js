function tabuada() {
    var num = window.document.getElementById("num")

    var tab = window.document.getElementById("seltab")

    var num = Number(num.value)

    if (!num) {
        alert("Por favor, insira um número!")
    } else {
        var i = 1
        tab.innerHTML = ""
        while (i <= 10) {

            var item = document.createElement("option")

            item.text = `${num} x ${i} = ${num * i}`

            tab.appendChild(item)

            i++
        }

    }

}