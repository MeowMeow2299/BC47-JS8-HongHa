function Nhanvien(_name, _email, _date, _job, _salary, _rank){
    this.name = _name,
    this._email = _email,
    this._date = _date,
    this.job = _job,
    this.salary = _salary,
    this.rank = _rank,

    // method
    this.salary = function(){
        return (this.date + this.salary)/2
    }
    
}


// Tạo 1 đối tượng sv từ lớp đối tượng SinhVien
var sv = new Nhanvien('abc', 20, 'Nam', 9, 8)

var sv2 = new Nhanvien('def', 22, 'Nữ', 10, 10)

console.log('sv: ', sv);
console.log(sv.tinhDTB());
console.log('sv2: ', sv2);
