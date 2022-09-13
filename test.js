let date = new Date()
let NYDate = new Date(date.getFullYear() + 1, 0, 1, 0, 0, 0)

console.log(date)
console.log(NYDate)
NDate = NYDate - date

days = Math.floor(NDate / (24*60*60*1000))
hours = Math.floor(NDate / (60*60*1000) % 24)
minutes = Math.floor(NDate / (60*1000) % 60)
seconds = Math.floor(NDate / (1000) % 60)

console.log('До нового года осталось ' + days + ' дней ' + hours + ' часов ' + minutes + ' минут ' + seconds + ' секунд ')