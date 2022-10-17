function printHours(){

    var today = moment().format('H');

       
         
    for (var i = -0; i < 24; i++) {
  
    var container = $('.container');
    var tmblockEl = $('<table>').addClass('time-block');
    var rowEl = $('<tr>').addClass('row');
    var hourDay = $('<td>').addClass('hour');
    var descHour = $('<td>').addClass('description');
    var descInput = $('<input>');
    var saveBtn = $('<td>guardar</td>').addClass('saveBtn');

    //descInput.setAttribute("value", i); 
    
    tmblockEl.appendTo(container);
    rowEl.appendTo(tmblockEl)
    hourDay.appendTo(rowEl);
    hourDay.append('<p>' + i + ':00' + '</p>');
    descHour.appendTo(rowEl);
    descHour.append(descInput);
    saveBtn.appendTo(rowEl);

    console.log(today);

    if (i  == today) {
        
        descHour.addClass('present');   
    } 

    if (i  < today) {
        
        descHour.addClass('past');   
    } 

    if (i  > today) {
        
        descHour.addClass('future');   
    } 


    }

    return;

}


printHours();


