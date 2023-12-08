//let array_names = [ "Adam", "Adrián", "Alena", "Alexandra", "Andrej", "Barbora", "Branislav", "Daniel", "Dávid", "Dominika", "Elena", "Eliška", "Filip", "František", "Gabriel", "Helena", "Ivana", "Jakub", "Jana", "Ján", "Jaroslav", "Jozef", "Juraj", "Karol", "Katarína", "Kristína", "Lukáš", "Marek", "Mária", "Martin", "Matej", "Matúš", "Michal", "Milan", "Miroslav", "Nikola", "Nina", "Oliver", "Patrik", "Pavol", "Peter", "Radovan", "Richard", "Roman", "Samuel", "Silvia", "Simona", "Stanislav", "Štefan", "Tatiana", "Tereza", "Tibor", "Tomáš", "Veronika", "Viktor", "Vladimír", "Zuzana" ];
let array_maleNames = [ "Jakub", "Jan", "Tomáš", "Lukáš", "Ondřej", "Vojtěch", "Matěj", "Adam",  "David", "Filip", "Petr", "Pavel", "Martin", "Marek", "Jiří", "Karel",  "Michal", "Daniel", "Josef", "Václav", "Dominik", "Ladislav", "Zdeněk",  "Radek", "Stanislav"];
let array_femaleNames = [ "Eliška", "Anna", "Tereza", "Hana", "Adéla", "Kateřina", "Karolína", "Nikola",  "Kristýna", "Michaela", "Jana", "Lenka", "Lucie", "Petra", "Veronika", "Monika",  "Klára", "Věra", "Marie", "Alena", "Simona", "Martina", "Barbora", "Pavla",  "Jitka"];
let array_surnames = [ "Adamík", "Bárta", "Bartoš", "Beneš", "Beran", "Beránek", "Bernard", "Biskup",  "Bláha", "Blažek", "Bobal", "Brož", "Bureš", "Čech", "Čermák", "Cermak",  "Černík", "Černý", "Červenka", "Červeny", "Chalupa", "Chalupník", "Chmela",  "Chvátal", "Čížek", "Čtvrtník", "Daniel", "David", "Doležal", "Doubek", "Dušek", "Dvořák", "Fiala", "Filipek", "Hájek", "Hasek", "Havel", "Havelka", "Havlíček", "Hlaváč", "Hlaváček", "Holub", "Horáček", "Horák", "Hornick", "Horník", "Hrabě", "Hrubý", "Hruška", "Jahoda", "Janda" ];
let array_workload =  [10,20,30,40]
let array_gender = ["male", "female"]

const dtoIn = {
    count: 4,
    age: {
        min:22,
        max: 39
    }
}

function randomISODateFromAgeRange(start_age, end_age) {
    let current_year = new Date().getFullYear();
    let earliest_year = current_year - end_age;
    let latest_year = current_year - start_age;

    let ran_year = Math.floor(Math.random() * (latest_year - earliest_year + 1)) + earliest_year;

    let ran_month = Math.floor(Math.random() * 12);
    let ran_day = Math.floor(Math.random() * 28) + 1;
    let ran_hour = Math.floor(Math.random() * 24);
    let ran_minute = Math.floor(Math.random() * 60);
    let ran_second = Math.floor(Math.random() * 60);

    let ran_date = new Date(ran_year, ran_month, ran_day, ran_hour, ran_minute, ran_second);

    return ran_date.toISOString();
}
function generateEmployeeData() {
    let output_array = [];
    let ran_surname;
    let ran_name;

    for (let i = 0; i < dtoIn.count; i++) {
        let ran_workload = array_workload[Math.floor(Math.random() * array_workload.length)];
        let randomISODate = randomISODateFromAgeRange(dtoIn.age.min, dtoIn.age.max);

        let ran_gender = array_gender[Math.floor(Math.random() * array_gender.length)];
        if (ran_gender === "male") {
            ran_name = array_maleNames[Math.floor(Math.random() * array_maleNames.length)];
            ran_surname = array_surnames[Math.floor(Math.random() * array_surnames.length)];
        } else {
            ran_name = array_femaleNames[Math.floor(Math.random() * array_femaleNames.length)];
            ran_surname = array_surnames[Math.floor(Math.random() * array_surnames.length)];
            if (ran_surname.endsWith("ek")) {
                ran_surname = ran_surname.slice(0, -2) + "ková";
            } else if (ran_surname.endsWith("a")) {
                ran_surname = ran_surname.slice(0, -1) + "ová";
            } else {
                ran_surname += "ová";
            }
        }

        output_array.push({
            gender: ran_gender,
            birthdate: randomISODate,
            name: ran_name,
            surname: ran_surname,
            workload: ran_workload
        });
    }
    return output_array;
}

let employeeData = generateEmployeeData(dtoIn);
console.log(employeeData);

function compareSurname (a, b) {
    if (a.surname < b.surname) {
        return -1;
    }
    if (a.surname > b.surname) {
        return 1;
    }
    return 0;
}
function compareName (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}
