const width: number = window.innerWidth;
const height: number = window.innerHeight;
const backgroundColor: string = '#fff2f0';
const borderColor: string = '#ff634f';
const fontColor: string = 'black';
const fontFamily: string = 'Halvar Breitschrift';


const generate = (amount: number, name: string, children: any[]) => {
    // if (!children) return [];

    const lst = [];
    for (let i = 0; i < amount; i++) {
        lst.push({text: `${name} ${i + 1}`, children});
    }

    return lst;
}


const DATA = generate(
    7, 'Филиал', generate(
        6, 'Подразделение', generate(
            2, 'Отдел', generate(
                20, 'Сотрудник', []
            )
        )
    )
);

// const DATA = [
//     {
//         id: 0,
//         text: 'Филиал 1',
//         children: [
//             {
//                 text: 'Подразделение 1',
//                 children: [
//                     {
//                         text: 'Отдел 1',
//                         children: generate(10, 'Сотрудник', null)
//                     },
//                     {
//                         text: 'Отдел 1',
//                         children: generate(10, 'Сотрудник', null)
//                     },
//                     {
//                         text: 'Отдел 1',
//                         children: generate(10, 'Сотрудник', null)
//                     },
//                 ]
//             },
//             {
//                 text: 'Подразделение 2',
//                 children: [
//                     {
//                         text: 'Отдел 1',
//                         children: generate(10, 'Сотрудник', null)
//                     },
//                     {
//                         text: 'Отдел 1',
//                         children: generate(10, 'Сотрудник', null)
//                     },
//                     {
//                         text: 'Отдел 1',
//                         children: generate(10, 'Сотрудник', null)
//                     },
//                 ]
//             },
//             {
//                 text: 'Подразделение 3',
//                 children: [
//                     {
//                         text: 'Отдел 1',
//                         children: generate(10, 'Сотрудник', null)
//                     },
//                     {
//                         text: 'Отдел 1',
//                         children: generate(10, 'Сотрудник', null)
//                     },
//                     {
//                         text: 'Отдел 1',
//                         children: generate(10, 'Сотрудник', null)
//                     },
//                 ]
//             },
//         ]
//     },
//     {
//         id: 1,
//         text: 'Филиал 2',
//         children: [
//             {
//                 text: 'Подразделение 1',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 2',
//                 children: null
//             }
//         ]
//     },
//     {
//         id: 3,
//         text: 'Филиал 3',
//         children: [
//             {
//                 text: 'Подразделение 1',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 2',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 3',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 1',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 2',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 3',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 1',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 2',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 3',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 1',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 2',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 3',
//                 children: null
//             },
//         ]
//     },
//     {
//         text: 'Филиал 4',
//         children: [
//             {
//                 text: 'Подразделение 1',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 2',
//                 children: null
//             }
//         ]
//     },
//     {
//         text: 'Филиал 5',
//         children: [
//             {
//                 text: 'Подразделение 1',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 2',
//                 children: null
//             }
//         ]
//     },
//     {
//         text: 'Филиал 6',
//         children: [
//             {
//                 text: 'Подразделение 1',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 2',
//                 children: null
//             }
//         ]
//     },
//     {
//         text: 'Филиал 7',
//         children: [
//             {
//                 text: 'Подразделение 1',
//                 children: null
//             },
//             {
//                 text: 'Подразделение 2',
//                 children: null
//             }
//         ]
//     },
// ];


export {
    width,
    height,
    backgroundColor,
    borderColor,
    fontColor,
    fontFamily,
    DATA,
}
