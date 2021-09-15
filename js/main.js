window.onload = onGet;
var locations = [];

function onGet() {
    const url = "https://static.pipezero.com/covid/data.json";
    var headers = {};
    fetch(url, {
        method: "GET",
        mode: "cors",
        headers: headers,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.error);
            }
            return response.json();
        })
        .then((data) => {
            for(let i = 0; i<data["locations"].length; i++)
            {
                locations.push(data["locations"][i])
            }
            setTimeout(function(){ $(".display").click(); }, 100);
            setTimeout(function(){ $(".display").click(); }, 100);
        })
        .catch(function (error) {
            console.log(error);
            
        });
}

function datatables() {
    return {
        headings: [
            {
                'key': 'name',
                'value': 'Tỉnh / Thành phố'
            },
            {
                'key': 'cases',
                'value': 'Số ca'
            },
            {
                'key': 'casesToday',
                'value': 'Hôm nay'
            },
            {
                'key': 'death',
                'value': 'Tử vong'
            }
        ],
        locations: locations,

        open: false,
        
        toggleColumn(key) {
            // Note: All td must have the same class name as the headings key! 
            let columns = document.querySelectorAll('.' + key);

            if (this.$refs[key].classList.contains('hidden') && this.$refs[key].classList.contains(key)) {
                columns.forEach(column => {
                    column.classList.remove('hidden');
                });
            } else {
                columns.forEach(column => {
                    column.classList.add('hidden');
                });
            }
        }
    }
}
