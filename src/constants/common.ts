export type EducationConstantType = {
    id: number,
    degree: string,
    startYear: number,
    endYear: number,
    institute: string,
    upperInstitute: string,
    keyNote?: string,
    stream?: string
}

export const EducationConstant:EducationConstantType[] = [
    {
        id: 1,
        degree: "Higher Secondary Education",
        startYear: 2015,
        endYear: 2016,
        institute: 'Madhyamgram High School',
        upperInstitute: 'WBCHSE',
        stream: "Science",
        keyNote: "Secured 97 out of 100 in Mathematics."
    },
    {
        id: 2,
        degree: "Bachelor Of Science (Hnrs.)",
        startYear: 2018,
        endYear: 2021,
        institute: 'Acharya Prafulla Chandra College',
        upperInstitute: 'WBSU',
        stream: "Computer Science",
        keyNote: "Scored 10 SGPA in 3rd SEM."
    },
    {
        id: 3,
        degree: "Master Of Science (Hnrs.)",
        startYear: 2021,
        endYear: 2023,
        institute: 'West Bengal State University',
        upperInstitute: 'WBSU',
        stream: "Computer Science",
    },
]

export type SkillType = {
    id: number,
    title: string,
    elements: {
        id:number,
        name: string
    }[]
}

export const SkillsConstant: SkillType[] = [
    {
        id: 1,
        title: 'Programming Language',
        elements: [
            {
                id: 1,
                name: "C/C++"
            },
            {
                id: 2,
                name: "Java Standard Edition"
            },
            {
                id:3,
                name: "Python"
            },
            {
                id: 4,
                name: "PHP"
            },
            {
                id:5,
                name: "JavaScript"
            }
        ]
    },
    {
        id: 2,
        title: 'Frameworks',
        elements: [
            {
                id: 1,
                name: "React.Js"
            },
            {
                id: 2,
                name: "NestJS"
            },
            {
                id:3,
                name: "Redux Toolkit"
            }
        ]
    },
    {
        id: 3,
        title: 'Tools',
        elements: [
            {
                id: 1,
                name: "Git"
            },
            {
                id: 2,
                name: "VS Code"
            },
        ]
    }
]

export type ExprienceType = {
    company: string 
    startYear: string,
    endYear: string
    role: string
}

export const ExprienceConstant: ExprienceType[] = [
    {
        company: "Sigilotech",
        startYear: "2023",
        endYear: "*",
        role: "Software Engineer Intern"
    }
]