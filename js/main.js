let collapsible = false
const inputActivityName = $('#activity-name').val();
const inputActivityEmail = $('#activity-email').val();
const inputActivityDate = $('#activity-end-date').val();
const inputActivityTime = $('#activity-end-time').val();
const inputActivityDescription = $('#activity-description').val();

$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        const inputActivityName = $('#activity-name').val();
        const inputActivityEmail = $('#activity-email').val();
        const inputActivityDate = $('#activity-end-date').val();
        const inputActivityTime = $('#activity-end-time').val();
        const inputActivityDescription = $('#activity-description').val();

        const newTask = $('div .todo-task');

        $(`
        <button type="button" class="collapsible">${inputActivityName}</button>
        <div class="content" id="new-task">
            <div class="new-task-infos">
                <label>E-mail do Atribuido: </label>
                <p>${inputActivityEmail}</p>
                <label>Data de Conclusão: </label>
                <p>${inputActivityDate} - ${inputActivityTime}</p>
            </div>
            <p>${inputActivityDescription}</p>
            <button type="submit" class="complete-task-button">Concluído</button>
        </div>
        `).appendTo(newTask);
        $(newTask).fadeIn(1000);
        $('</div>').appendTo(newTask);

        $('#activity-name').val('');
        $('#activity-email').val('');
        $('#activity-end-date').val('');
        $('#activity-end-time').val('');
        $('#activity-description').val('');
    })

    $('.activity button').click(function () {
        if (collapsible) {
            $('.content').slideUp();
            collapsible = false;
        } else {
            $('.content').slideDown();
            collapsible = true;
        }
    });

    $('.complete-task-button').click(function () {
        $('.collapsible').css("text-decoration", "line-through")
    })

    // $('header button').click(function () {
    //     $('form').slideDown();
    // })

    // $('#botao-cancelar').click(function() {
    //     $('form').slideUp();
    // })

})