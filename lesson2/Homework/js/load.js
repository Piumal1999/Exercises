$(function () {
    $.ajax({
        type : 'get',
        url : 'js/persons.json',
        dataType : 'json',
        success : function(addPerson){
            console.log(addPerson)
            let content = Mustache.render($("#template").html(), {"personsList": addPerson})
            $("#content").html(content)
            console.log(content)
        }
    })




})