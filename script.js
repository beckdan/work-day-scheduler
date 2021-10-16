var timeBlockEl = $('#time-block')
var saveBtnEl = $('#saveBtn')
var inputField = $('#event-input')


$(document).ready(function(){
    console.log("running")
    for (var i = 1; i < 13; i++){
        console.log(i)
        var currentTime =localStorage.getItem(""+i)
        var el =$("button[data-time='"+i+"']")
        if(el){
            el.parent().find("textarea").text(currentTime)

           // el.parentElement.children[1].textContent = currentTime
            console.log(el.parent())
        }
    }
    // let value = localStorage.getItem(value)
    // localStorage.getItem(value)
})


$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'))

$('.save-btn').on('click', function(){
    let time = $(this).attr('id')
    let value = $(this).siblings('.description').val()
    console.log(value)
    localStorage.setItem(time, value)
})











// function init(){
//     let value = JSON.parse(localStorage.getItem('.description')
//     )};
