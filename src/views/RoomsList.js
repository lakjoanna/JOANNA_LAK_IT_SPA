import { RoomsListItem } from './RoomsListItem';

export function RoomsList() {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Lista Pokoi</h2>
        <header>Loading...</header>
    `;

    fetch('http://localhost:3000/rooms')
        .then(response => response.json())
        .then(rooms => {
            const ul = document.createElement('ul');
            const lis = rooms.map(room => RoomsListItem(room));
     

            ul.append(...lis);
            section.querySelector('header').remove();
            section.append(ul);
        });


    return section;
}