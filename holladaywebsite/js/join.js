// Adds the information to the selected radio button

radiobtns = document.querySelectorAll('.sbs');

for (const radiobtn of radiobtns) {
    if (radiobtn == radiobtns[0]) {
        radiobtn.addEventListener('click', () => {

            document.querySelector('#member_info').innerHTML = '';

            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li');
            let li4 = document.createElement('li');
            let li5 = document.createElement('li');
            let li6 = document.createElement('li');
            let li7 = document.createElement('li');

            li1.appendChild(document.createTextNode('Ribbon Cutting for your business with Board Membership Attendance!'));
            li2.appendChild(document.createTextNode('Chamber Launch opportunities to explore benefits and meet other members'));
            li3.appendChild(document.createTextNode('Networking opportunities throughout the year'));
            li4.appendChild(document.createTextNode('Chamber referrals to your business/organization'));
            li5.appendChild(document.createTextNode('Opportunities to post your company announcements in the monthly Member Newsletter that goes out to all Chamber members, as well as on the Chamber social media platforms'));
            li6.appendChild(document.createTextNode('Advertisement & sponsorship opportunities'));
            li7.appendChild(document.createTextNode('Invitations to workshops, trainings and programs designed to keep you informed, stay engaged, and support your employees & business'));

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            ul.appendChild(li7);
            
            document.querySelector('#member_info').appendChild(ul);
        });
    };
    if (radiobtn == radiobtns[1]) {
        radiobtn.addEventListener('click', () => {

            document.querySelector('#member_info').innerHTML = '';
            
            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li');
            let li4 = document.createElement('li');
            
            li1.appendChild(document.createTextNode('Includes all of the items in "Non Profit Level" plus: '));            
            li2.appendChild(document.createTextNode('5 passes to the Business After Hours social events (held monthly)'));
            li3.appendChild(document.createTextNode('Additional pass to Annual Summer Social'));
            li4.appendChild(document.createTextNode('Priority access to host After Hours & other monthly events'));

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            
            document.querySelector('#member_info').appendChild(ul);
        });
    };
    if (radiobtn == radiobtns[2]) {
        radiobtn.addEventListener('click', () => {
            document.querySelector('#member_info').innerHTML = '';

            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li');

            li1.appendChild(document.createTextNode('Includes all of the items in "Bronze Level" plus:'));
            li2.appendChild(document.createTextNode('Listed as a co-sponsor of one major event (Summer Social, Annual Holiday Bash, etc.)'));
            li3.appendChild(document.createTextNode('Logo on website'));

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            
            document.querySelector('#member_info').appendChild(ul);
        });
    };
    if (radiobtn == radiobtns[3]) {
        radiobtn.addEventListener('click', () => {
            document.querySelector('#member_info').innerHTML = '';

            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li');
            let li4 = document.createElement('li');

            li1.appendChild(document.createTextNode('Includes all of the items in "Bronze" and "Silver" levels, plus:'));
            li2.appendChild(document.createTextNode('Listed as Sponsor of one major event (Summer Social, Annual Holiday Bash, etc.)'));
            li3.appendChild(document.createTextNode('Logo on website'));
            li4.appendChild(document.createTextNode('Log on all e-mail communications'));

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            
            document.querySelector('#member_info').appendChild(ul);
        });
    };
};