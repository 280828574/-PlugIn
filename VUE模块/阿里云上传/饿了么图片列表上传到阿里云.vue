<template>
    <div class="">
        <el-form-item label="列表" class="inputt_left">
            <el-upload
                :action="domain"
                name="file"
                list-type="picture-card"
                :data="imageUpdate"
                :file-list="url"
                :on-preview="handlePictureCardPreview"
                :before-upload="beforeAvatarUpload"
                :on-success="sethandleSuccess"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </el-form-item>
    </div>
</template>

<script>
import swal from 'sweetalert2';

export default {
    name: 'imgs',
    props: ['img_url'],
    data() {
        return {
            // 上传参数
            imageUpdate: {
                name: '',
                OSSAccessKeyId: '',
                policy: '',
                Signature: '',
                key: '',
                success_action_status: 200
            },
            // 上传地址
            domain: '',
            // 上传路径
            key: '',
            url: [
                {
                    name: '',
                    url: ''
                }
            ]
        };
    },
    mounted() {
        this.fetchUpUrl();
    },
    methods: {
        // 获取上传地址
        async fetchUpUrl() {
            const res = await this.$api.chapter.fetchUpUrl(
                {
                    dir: 'chapter',
                    type: 1
                }
            );
            if (res.success) {
                this.imageUpdate.OSSAccessKeyId = res.data.aliyun_form_conf.accseeid;
                this.imageUpdate.policy = res.data.aliyun_form_conf.policy;
                this.imageUpdate.Signature = res.data.aliyun_form_conf.signature;
                this.imageUpdate.key = res.data.aliyun_form_conf.save_path;
                this.key = res.data.aliyun_form_conf.save_path;
                this.domain = res.data.aliyun_form_conf.domain;
            } else {
                swal(
                    '' + res.msg + '',
                    '',
                    'error'
                );
            }
        },
        // 上传之前
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
            const isLt200M = file.size / 1024 / 1024 < 200;
            const url = this.domain;
            if (!url) {
                this.$message.error('获取上传地址失败请稍后重试或刷新页面!');
                this.fetchUpUrl();
                return url;
            }
            let timestamp = Date.parse(new Date());
            let number = this.random(1000, 9999);
            let position = file.type.indexOf('/');
            let length = file.type.length;
            let type = file.type.substring(position + 1, length);
            this.imageUpdate.key = '';
            this.imageUpdate.key = JSON.parse(JSON.stringify(this.key));
            this.imageUpdate.key = this.imageUpdate.key + timestamp + number + '.' + type;
            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG/JPEG/PNG 格式!');
            }
            if (!isLt200M) {
                this.$message.error('上传图片大小不能超过 200MB!');
            }
            return isJPG && isLt200M;
        },
        // 上传成功时的钩子
        sethandleSuccess(file, fileList) {
            this.url.push({
                name: this.imageUpdate.name,
                url: this.domain + this.imageUpdate.key
            });
            this.$emit('message', this.url, 'add');
        },
        // 移除文件时的钩子
        handleRemove(file, fileList) {
            this.$emit('message', fileList, 'remove');
        },
        // 点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据
        handlePictureCardPreview(file) {
            this.$emit('message', file.url, 'see');
        },
        // 随机数
        random: function (end, start) {
            return start + ~~(Math.random() * (end - start));
        }
    },
    watch: {
        'img_url': function () {
            this.url = this.img_url;
        }
    }
};
</script>

<style lang="scss">

</style>
