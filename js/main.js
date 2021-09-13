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
            locations = data["locations"];
           console.log(locations);
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
        locations:[
            {
                "name": "TP. Hồ Chí Minh",
                "death": 12220,
                "treating": 0,
                "cases": 303995,
                "recovered": 0,
                "casesToday": 5446
              },
              {
                "name": "Bình Dương",
                "death": 1411,
                "treating": 0,
                "cases": 160697,
                "recovered": 0,
                "casesToday": 3651
              },
              {
                "name": "Đồng Nai",
                "death": 325,
                "treating": 0,
                "cases": 35618,
                "recovered": 0,
                "casesToday": 768
              },
              {
                "name": "Long An",
                "death": 348,
                "treating": 0,
                "cases": 28531,
                "recovered": 0,
                "casesToday": 327
              },
              {
                "name": "Tiền Giang",
                "death": 304,
                "treating": 0,
                "cases": 11830,
                "recovered": 0,
                "casesToday": 161
              },
              {
                "name": "Đồng Tháp",
                "death": 129,
                "treating": 0,
                "cases": 7869,
                "recovered": 0,
                "casesToday": 59
              },
              {
                "name": "Khánh Hòa",
                "death": 84,
                "treating": 0,
                "cases": 7448,
                "recovered": 0,
                "casesToday": 44
              },
              {
                "name": "TP. Hồ Chí Minh",
                "death": 12220,
                "treating": 0,
                "cases": 303995,
                "recovered": 0,
                "casesToday": 5446
              },
              {
                "name": "Bình Dương",
                "death": 1411,
                "treating": 0,
                "cases": 160697,
                "recovered": 0,
                "casesToday": 3651
              },
              {
                "name": "Đồng Nai",
                "death": 325,
                "treating": 0,
                "cases": 35618,
                "recovered": 0,
                "casesToday": 768
              },
              {
                "name": "Long An",
                "death": 348,
                "treating": 0,
                "cases": 28531,
                "recovered": 0,
                "casesToday": 327
              },
              {
                "name": "Tiền Giang",
                "death": 304,
                "treating": 0,
                "cases": 11830,
                "recovered": 0,
                "casesToday": 161
              },
              {
                "name": "Đồng Tháp",
                "death": 129,
                "treating": 0,
                "cases": 7869,
                "recovered": 0,
                "casesToday": 59
              },
              {
                "name": "Khánh Hòa",
                "death": 84,
                "treating": 0,
                "cases": 7448,
                "recovered": 0,
                "casesToday": 44
              }
        ],
        selectedRows: [],

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
        },

        getRowDetail($event, id) {
            let rows = this.selectedRows;

            if (rows.includes(id)) {
                let index = rows.indexOf(id);
                rows.splice(index, 1);
            } else {
                rows.push(id);
            }
        }
    }
}