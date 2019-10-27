const t = dom.find('#test>.red')[0] // 获取对应的元素
console.log(t)

dom.style(test, 'color', 'red')

const divList = dom.find('.red')
console.log(divList)

dom.each(divList, (n) => console.log(n))

