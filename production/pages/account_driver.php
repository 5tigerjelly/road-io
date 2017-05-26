      <div id=UploadDiv class="container">
      <h1>User Profile</h1>
			<div class="panel panel-info">
				<div class="panel-heading">
					<h2 class="panel-title">Manage Account Information
            <!-- <span class="pull-right">
  					<a href="#" data-original-title="Edit this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-warning"><i class="glyphicon glyphicon-edit"></i></a>
  					</span> -->
          </h2>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-md-3 col-lg-3 " align="center">
              <span style="font-size:12em;" class="fa fa-user"></span>
            </div>
						<div class=" col-md-9 col-lg-9 ">
							<table class="table table-user-information">

								<tr>
									<td><b>Email</b></td>
									<td><span id="email"></span></td>
								</tr>
								<tr>
									<td><b>Username</b></td>
									<td><span id="username"></span></td>
								</tr>
								<tr>
									<td><b>Country</b></td>
									<td><span id="local"></span></td>
								</tr>
                <tr>
									<td><b>Phone</b></td>
									<td><span id="phone"></span></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
      <div class="panel panel-default">
        <div class="panel-body">
          <button id="open_change_pass" type="button" class="btn btn-outline btn-primary btn-lg">Change Password</button>
          <button id="delete_account" type="button" class="btn btn-outline btn-danger btn-lg">Delete Account</button>
        </div>
      </div>
  

      <div id="change_pass" class="panel panel-default">
        <div class="panel-body">
        Current Password: <input id="cur_pass" type="password">
        New Password: <input id="new_pass" type="password">
        New Password Confirm: <input id="new_pass_conf" type="password">
        <button id="submit_change_pass" class="btn">Submit</button>
        </div>
      </div>
		</div>
