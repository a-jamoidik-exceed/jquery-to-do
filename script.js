$(document).ready(function () {
    let tasks = [
        {
            title: 'First task',
            BGColor: '#f279a2'
        },
        {
            title: 'Second task',
            BGColor: '#9170cb'
        },
        {
            title: 'Third task',
            BGColor: '#5eb3f6'
        },
    ]

    function prependItem (index, title, BGColor) {
        let newItem = document.createElement("li");
        newItem.className = "tasklist__item";
        
        let newItemCheckbox = document.createElement("div");
        newItemCheckbox.className = "tasklist__item-checkbox";
        newItemCheckbox.style.backgroundColor = BGColor;

        let newItemCheckboxInput = document.createElement("input");
        newItemCheckboxInput.setAttribute('type', 'checkbox')
        newItemCheckboxInput.setAttribute('data-index', index)
        
        let newItemTitle = document.createElement("div");
        newItemTitle.className = "tasklist__item-title";
        newItemTitle.innerHTML = title;
        newItemTitle.style.backgroundColor = BGColor;
        
        newItemCheckbox.prepend(newItemCheckboxInput);
        newItem.prepend(newItemTitle);
        newItem.prepend(newItemCheckbox);
        return newItem;
    }
    function updateTaskList () {
        $('.tasklist').empty();
        for (let i = 0; i < tasks.length; i++) {
            $(".tasklist").prepend(prependItem(i, tasks[i].title, tasks[i].BGColor));
        }    
    };
    let colors = [
        '#f16d69',
        '#f279a2',
        '#9170cb',
        '#5eb3f6',
        '#67d7e5',
        '#ffe085'
    ]
    function randomColor () {
        function randomInteger(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        }
        return colors[randomInteger(0, 5)];
    }
    $('.taskinput__submit').on('click', function () {
        let newTaskTitle = $('.taskinput__text').val();
        if (newTaskTitle) {
            tasks.push({title: newTaskTitle, BGColor: randomColor()});
            updateTaskList();
            $('.taskinput__text').val('');
        }
    })
    $('.taskinput__palette-color').on('click', function (e) {
        let pickedColorIndex = e.target.dataset.index;
        let checked = $('input:checkbox:checked').toArray();
        for (let i = 0; i < checked.length; i++) {
            let itemIndex = checked[i].dataset.index;
            tasks[itemIndex].BGColor = colors[pickedColorIndex];
        }
        console.log(tasks)
        updateTaskList();
    })
    updateTaskList();
})