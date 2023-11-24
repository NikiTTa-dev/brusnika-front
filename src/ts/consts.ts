const borderColor: string = '#C2C2C2';
const width: number = window.innerWidth;
const height: number = window.innerHeight;

const DATA = {
    info: {
        gap: 30
    },
    data: [
        {
            text: 'Филиал 1',
            children: {
                info: {
                    gap: 20,
                },
                data: [
                    {
                        text: 'Подразделение 1',
                        children: {
                            info: {
                                gap: 10
                            },
                            data: [
                                {
                                    text: 'Отделов 1',
                                    children: null
                                },
                            ]
                        }
                    },
                    {
                        text: 'Подразделение 2',
                        children: null
                    },
                    {
                        text: 'Подразделение 3',
                        children: null
                    },
                ]
            }
        },
        {
            text: 'Филиал 2',
            children: {
                info: {
                    gap: 20
                },
                data: [
                    {
                        text: 'Подразделение 1',
                        children: null
                    },
                    {
                        text: 'Подразделение 2',
                        children: null
                    }
                ]
            }
        },
        {
            text: 'Филиал 3',
            children: {
                info: {
                    gap: 20,
                },
                data: [
                    {
                        text: 'Подразделение 1',
                        children: null
                    },
                    {
                        text: 'Подразделение 2',
                        children: null
                    },
                    {
                        text: 'Подразделение 3',
                        children: null
                    },
                    {
                        text: 'Подразделение 1',
                        children: null
                    },
                    {
                        text: 'Подразделение 2',
                        children: null
                    },
                    {
                        text: 'Подразделение 3',
                        children: null
                    },
                    {
                        text: 'Подразделение 1',
                        children: null
                    },
                    {
                        text: 'Подразделение 2',
                        children: null
                    },
                    {
                        text: 'Подразделение 3',
                        children: null
                    },
                    {
                        text: 'Подразделение 1',
                        children: null
                    },
                    {
                        text: 'Подразделение 2',
                        children: null
                    },
                    {
                        text: 'Подразделение 3',
                        children: null
                    },
                    
                ]
            }
        },
    ]
};


export {
    DATA,
    borderColor,
    width,
    height,
}
