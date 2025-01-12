// const mongoose = require("mongoose");
// const mailSender = require("../utils/mailSender");
// const emailTemplate = require("../mail/templates/emailVerificationTemplate");
// const OTPSchema = new mongoose.Schema({
// 	email: {
// 		type: String,
// 		required: true,
// 	},
// 	otp: {
// 		type: String,
// 		required: true,
// 	},
// 	createdAt: {
// 		type: Date,
// 		default: Date.now,
// 		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
// 	},
// });

// // Define a function to send emails
// async function sendVerificationEmail(email, otp) {
// 	// Create a transporter to send emails
      
//     let transporter = nodemailer.createTransport({
// 		host: process.env.MAIL_HOST,
// 		auth:{
// 			user:process.env.MAIL_USER,
// 			pass: process.env.MAIL_PASS,
// 		},
// 	});


// 	// Define the email options
     
//     let info = await transporter.sendMail({
//             from:`CodeHelp - by Babbar`,
//             to: doc.email,
//             subject: "New File Uploaded on Cloudinary",
//             html:`<h2>Hello Jee</h2> <p>File Uploaded View here: <a href="${doc.imageUrl}">${doc.imageUrl}</a> </p>`,
//         })

// 	// Send the email
// 	try {
// 		const mailResponse = await mailSender(
// 			email,
// 			"Verification Email",
// 			emailTemplate(otp)
// 		);
// 		console.log("Email sent successfully: ", mailResponse.response);
// 	} catch (error) {
// 		console.log("Error occurred while sending email: ", error);
// 		throw error;
// 	}
// }

// // Define a post-save hook to send email after the document has been saved
// OTPSchema.pre("save", async function (next) {
// 	console.log("New document saved to database");

// 	// Only send an email when a new document is created
// 	if (this.isNew) {
// 		await sendVerificationEmail(this.email, this.otp);
// 	}
// 	next();
// });

// const OTP = mongoose.model("OTP", OTPSchema);

// module.exports = OTP;




const mongoose = require("mongoose");
const nodemailer = require("nodemailer"); // Import nodemailer module
const mailSender = require("../utils/mailSender"); // Import mailSender function
const emailTemplate = require("../mail/templates/emailVerificationTemplate"); // Import emailTemplate function

const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
    },
});

// Define a function to send emails
async function sendVerificationEmail(email, otp) {
    // Create a transporter to send emails
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        auth:{
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    // Define the email options
    let info = await transporter.sendMail({
        from: `CodeHelp - by Babbar`,
        to: email,
        subject: "Verification Email",
        html: emailTemplate(otp),
    });

    // Log the result of sending email
    console.log("Email sent successfully: ", info.response);
}

// Define a post-save hook to send email after the document has been saved
OTPSchema.pre("save", async function (next) {
    console.log("New document saved to database");

    // Only send an email when a new document is created
    if (this.isNew) {
        await sendVerificationEmail(this.email, this.otp);
    }
    next();
});

const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;
