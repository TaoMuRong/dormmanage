<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="学号" prop="id">
        <el-input v-model="form.id" />
      </el-form-item>
      <el-form-item label="姓名" prop="sname">
        <el-input v-model="form.sname" />
      </el-form-item>
      <el-form-item label="性别" prop="ssex">
        <el-select v-model="form.ssex" placeholder="选择性别">
          <el-option label="男" value="男" />
          <el-option label="女" value="女" />
        </el-select>
      </el-form-item>
      <el-form-item label="寝室号" prop="dormId">
        <el-input v-model="form.dormId" />
      </el-form-item>
      <el-form-item label="体温" prop="bodyTem">
        <el-input v-model="form.bodyTem" />
      </el-form-item>
      <el-form-item label="打卡地点" prop="location">
        <el-input v-model="form.location" />
      </el-form-item>

      <el-form-item label="备 注" prop="details">
        <el-input v-model="form.details" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">打 卡</el-button>
        <el-button @click="resetForm('form')">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: "",
        sname: "",
        ssex: "男",
        dormId: "",
        isCheck: 0,
        bodyTem: 36.5,
        location: "",
        details: "",
      },
    };
  },

  methods: {
    onSubmit() {
      this.form.isCheck = 1;
      var param = JSON.stringify({
        bodyTem: this.form.bodyTem,
        location: this.form.location,
      });

      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$axios({
            url: "/api/dorm/students/checkin",
            method: "post",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            data: param,
          })
            .then((res) => {
              this.loading = false;
              //console.log(res);
              var responseCode = res.data.code;
              if (responseCode == 205) {
                this.$message.error("今日已打卡，无需重复打卡！");
              } else if (responseCode == 200) {
                this.$message.success("打卡成功!");
              }
            })
            .catch((res) => {
              this.loading = false;
              console.log(res);
              this.$message.error("网络不好，请稍等！");
            });
        } else {
          console.log("提交错误!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.$message({
        message: "重置!",
        type: "warning",
      });
    },
  },

  created: function () {
    var formData = JSON.parse(window.localStorage.loginData);
    this.form.id = formData.id;
    this.form.sname = formData.sname;
    this.form.ssex = formData.ssex;
    this.form.dormId = formData.dormId;
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

