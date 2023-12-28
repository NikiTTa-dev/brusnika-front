const width: number = window.innerWidth;
const height: number = window.innerHeight;
const backgroundColor: string = '#23212C';
const borderColor: string = 'rgba(113,112,118,0.5)';
const borderColorEmployee: string = '#01A2A4';
const borderColorVacancy: string = '#4371E6';
const fontColor: string = '#F2F2F2';
const secondaryFontColor: string = '#878787';
const fontFamily: string = 'Halvar Breitschrift';

enum Type {
    Employee = 'Сотрудник',
    Vacancy = 'Вакансия'
}


const generate = (amount: number, name: string, childrenGroups: any[]) => {
    const lst = [];
    for (let i = 0; i < amount; i++) {
        lst.push({
            id: `${Math.trunc(Math.random() * 100)}`,
            name: `${name} ${i + 1}`,
            categoryName: 'string',
            positions: amount !== 7 ? [
                {
                    id: `${Math.trunc(Math.random() * 100)}`,
                    roleName: 'Архитектор',
                    workType: 'Бизнес',
                    type: 'Сотрудник',
                    firstName: 'Иван',
                    lastName: 'Иванов',
                    patronymic: 'Иванович',
                },
                {
                    id: `${Math.trunc(Math.random() * 100)}`,
                    roleName: 'Начальник отдела',
                    workType: 'Сервис',
                    type: 'Вакансия',
                }
            ] : null,
            childrenGroups
        });
    }

    return lst;
}


const DATA = generate(
    7, 'Филиал', generate(
        6, 'Подразделение', generate(
            2, 'Отдел', generate(
                30, 'Группа', []
            )
        )
    )
);


export {
    width,
    height,
    backgroundColor,
    borderColor,
    borderColorEmployee,
    borderColorVacancy,
    fontColor,
    secondaryFontColor,
    fontFamily,
    DATA,
    Type
}
