<template>
	<div class="content">
		<div class="form-bg">
			<h2 class="title-bar">Inventory Management System</h2>
			<div class="container">
				<div class="row">
					<div class="col-md-5 mx-auto ">
						<div class="form-container">
							<div class="form-icon"><i class="fa fa-user"></i></div>
							<h3 class="login-title">Login</h3>
							<form class="form-horizontal">
								<div class="form-group">
									<label>email</label>
									<input class="form-control" type="email" placeholder="email address"
										v-model="login.email">
								</div>
								<div class="form-group">
									<label>password</label>
									<input class="form-control" type="password" placeholder="password"
										v-model="login.password">
								</div>
								<div class="" style="margin:30px 40px">
									<button type="button" class="btn" @click="userLogin">Login</button>

									<div class="pt-3">										
											<nuxt-link to="password-reset" class="forgot-password">Forgot your password?
											</nuxt-link>
										
									</div>

									<div class="alert alert-danger mt-4 text-center" v-if="login_error">
										<strong>{{ login_error }}!</strong>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	auth: false,

	mounted() { },
	data() {
		return {
			login: {
				email: "",
				password: "",
			},
			errors: [],
			login_error: "",
			visibile: false,
			nonvisibile: true,
		};
	},
	methods: {
		Password_Visibility() {
			const passwordField = document.querySelector("#password");

			if (passwordField.getAttribute("type") === "password") {
				passwordField.setAttribute("type", "text");
				this.visibile = true;
				this.nonvisibile = false;

			}
			else {
				passwordField.setAttribute("type", "password");
				this.nonvisibile = true;
				this.visibile = false;
			}
		},

		async userLogin() {
			await this.$auth
				.loginWith("laravelSanctum", { data: this.login })
				.then((res) => {
					if (res.status == 203) {
						this.login_error = res.data.message;
					}
					// this.$toaster.success("Login Successful");
					this.$router.push("/dashboard");
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
};
</script>
<style scoped>
.title-bar{
	text-align: center;
	margin:30px 0px;
	color: #0c5460;
	font-weight: bold;
	letter-spacing: 2px;
	font-size: 40px;
}
.content {
	margin-top: 70px;

}

.demo {
	background: #F2F2F2;
}

/* .form-bg{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
} */

.form-container {
	background: #ecf0f3;
	font-family: 'Nunito', sans-serif;
	padding: 40px;
	border-radius: 20px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	/* box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white; */


}

.form-container .form-icon {
	color: #0c5460;
	font-size: 55px;
	text-align: center;
	line-height: 100px;
	width: 100px;
	height: 100px;
	margin: 0 auto 15px;
	border-radius: 50px;
	box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px #fff;
}

.form-container .login-title {
	color: #0c5460;
	font-size: 25px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 1px;
	text-align: center;
	margin: 0 0 20px;
}

.form-container .form-horizontal .form-group {
	margin: 0 0 25px 0;
}

.form-container .form-horizontal .form-group label {
	font-size: 15px;
	font-weight: 600;
	text-transform: uppercase;
}

.form-container .form-horizontal .form-control {
	color: #333;
	background: #ecf0f3;
	font-size: 15px;
	height: 50px;
	padding: 20px;
	letter-spacing: 1px;
	border: none;
	border-radius: 50px;
	box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px #fff;
	display: inline-block;
	transition: all 0.3s ease 0s;
}

.form-container .form-horizontal .form-control:focus {
	box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px #fff;
	outline: none;
}

.form-container .form-horizontal .form-control::placeholder {
	color: #808080;
	font-size: 14px;
}

.form-container .form-horizontal .btn {
	color: #000;
	background: linear-gradient(#45c8f1, #0c5460);
	/* background-color: #ac40ab; */
	font-size: 15px;
	font-weight: bold;
	text-transform: uppercase;
	width: 100%;
	padding: 12px !important;
	border-radius: 50px !important;
	box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px #fff;
	border: none;
	transition: all 0.5s ease 0s;
}

.forgot-password {
	color: #c717c4
}

.form-container .form-horizontal .btn:hover,
.form-container .form-horizontal .btn:focus {
	color: #fff;
	letter-spacing: 3px;
	box-shadow: none;
	outline: none;
}
</style>