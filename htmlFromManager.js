const obj = {
    name: 'Darcy',
    salesTeam: [
        { name: 'Alice', quota: '500'},
        { name: 'Bob', quota: '240'},
        { name: 'Charlie', quota: '10'},
    ],
    district: {
        name: 'ATX',
        offices: 10,
        remote: true
    }
}

// { <div class='district-sales'>
//     <h1>Darcy</h1>
//     <h3>Total quota is: 750</h3>
//     <h3>ATX Sales Team</h3>
//     <ul>
//         <li>Alice</li>
//         <li>Bob</li>
//         <li>Charlie</li>
//     </ul>
// </div> }

function htmlFromManager(obj) {
    const div = document.createElement('div')
    div.className = 'district-sales'
    document.body.appendChild(div)

    const h1 = document.createElement('h1')
    h1.textContent = obj.name
    div.appendChild(h1)

    const quota = document.createElement('h3')
    quota.textContent = `Total quota is: ${total()}`
    div.appendChild(quota)

    const salesTeam = document.createElement('h3')
    salesTeam.textContent = `${obj.district.name} Sales Team`
    div.appendChild(salesTeam)

    const ul = document.createElement('ul')
    div.appendChild(ul)

    for(let i = 0; i < obj.salesTeam.length; i++) {
        const li = document.createElement('li')
        let member = obj.salesTeam[i].name;
        li.textContent = member
        ul.appendChild(li)
    }
    function total() {
        let sum = 0;
        for(let i = 0; i < obj.salesTeam.length; i++) {
            let currentQuota = parseInt(obj.salesTeam[i].quota)
            sum += currentQuota;
        }
        return sum;
    }
}

htmlFromManager(obj)
//console.log(obj.salesTeam[0].name);