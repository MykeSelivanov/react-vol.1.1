// fake api
const studentsAPI = {
    students: [
      { number: 1, name: 'John', class: 'A' },
      { number: 2, name: 'Doe', class: 'B' },
      { number: 3, name: 'Ryan', class: 'C' },
      { number: 4, name: 'Pete', class: 'D' },
    ],
    getAll() {
      return this.students
    },
    getStudent(id) {
      return this.students.filter((student) => student.number === Number(id))
    }
  };

export default studentsAPI;