const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema ({
    name: {type: String, required: true},
    decription: {type: String, maxLength: 600},
    image: {type: String, maxLength:255},
    vd: {type: String, required: true},
    slug: { 
        type: String, 
        unique: true,
    }
},{
    timestamps: true,
})

function generateSlug(name) {
    return name.replace(/\s+/g, '-').toLowerCase();
}

Course.pre('save', async function (next) {
    if (!this.slug) {
        // Bắt đầu bằng việc tạo slug từ name
        this.slug = generateSlug(this.name);

        let slugExists = true;
        let slugCount = 0;
        const originalSlug = this.slug;

        // Lặp để tìm slug duy nhất
        while (slugExists) {
            // Kiểm tra xem slug có trùng không
            const existingCourse = await mongoose.models.Course.findOne({ slug: this.slug });
            if (existingCourse) {
                // Nếu trùng, thêm hậu tố (ví dụ: số đuôi)
                slugCount += 1;
                this.slug = `${originalSlug}-${slugCount}`;
            } else {
                // Nếu không trùng, thoát khỏi vòng lặp
                slugExists = false;
            }
        }
    }
    next();
});

module.exports = mongoose.model('Course', Course);