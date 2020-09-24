$(document).ready(function () {
    // Step 1
    let btn = $('<button>Click for a Message</button>')
    $("body").append(btn)
    btn.click(function () {
        alert("A (nice) Message")
        console.log("message")
    });

    // Step 2

    $("#button1").click(function () {
        let textValue = $("input[type = 'text']").val();
        console.log("testing")
        alert(textValue)
    });

    // Step 3

    $("#div1").css({
        "height": "50px"
    });
    $("#div1").mouseover(function () {
        $("#div1").css({
            "background-color": "black"
        });
    });
    $("#div1").mouseout(function () {
        $("#div1").css({
            "background-color": "white"
        });
    });

    // Step 4

    // 
    // console.log($("input[type = 'text']").val())
    //  let textValue = $("input[type = 'text']").val()
    let p = $("<p>" + "Sample paragraph Text" + "</p>");

    $("body").append(p);
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    p.css({
        "fontSize": "40px"
    });
    p.click(
        function () {
            console.log($("input[type = 'text']").val())
            p.css({
                "color": getRandomColor,
            });
        });

    // Step 5

    let div2 = $('<div></div>')
    $('body').append(div2)
    let btn1 = $('<button>Display Name</button>')
    $("body").append(btn1)
    btn1.click(function () {
        let span = $('<span>William Perry</span>')
        $('body').append(span)
    });

    // Step 6

    const friendsArray = ["John", "Oscar", "Yogi", "Bill", "George", "Pete", "Sam", "Bruce", "Warner", "Tyler"];
    let btn2 = $('<button> Add Friend </button>');
    
    let counter = 0
    $('body').append(btn2);
    let fDiv = $('<div></div>')
    $('body').append(fDiv)
    fDiv.append($('#fUL'))
    btn2.click(function () {
        let displayFriends = $('#fUL');
        if (friendsArray[counter]) {
            let friend = friendsArray[counter];
            counter++;
            let fLI = $(`<li>${friend}</li>`);
            $('#fUL').append(fLI);
            displayFriends.append(fLI);
        };
    });








})