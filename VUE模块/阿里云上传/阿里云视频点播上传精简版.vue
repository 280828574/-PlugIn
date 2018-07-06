<template>
    <div class="video_upload">
        <input type="file" name="file" id="files" multiple @change="selectFile"/>
        <button type="button" @click="clearInputFile()" id="clearInputFile">清空继续选择</button>
        <button type="button" @click="start()" id="video_start">开始上传</button>
        <br/>
        <select multiple="multiple" id="textarea"
                style="position:relative; width:90%; height:450px; vertical-align:top; border:1px solid #cccccc;">
        </select>
        <button type="button" @click="clearLog()" id="clearLog">清日志</button>
    </div>
</template>

<script>
import swal from 'sweetalert2';

export default {
    name: 'uploadVideo',
    props: ['videoData'],
    data() {
        return {
            uploader: '',
            uploadAuth: '',
            uploadAddress: '',
            videoId: '',
            videoDatas: {
                url: '',
                videoId: ''
            }
        };
    },
    created () {
        this.fetchUpUrl();
        let me = this;
        this.uploader = new window.AliyunUpload.Vod({
            // 分片大小默认1M，不能小于100K
            partSize: 1048576,
            // 并行上传分片个数，默认5
            parallel: 5,
            // 网络原因失败时，重新上传次数，默认为3
            retryCount: 3,
            // 网络原因失败时，重新上传间隔时间，默认为2秒
            retryDuration: 2,
            // 开始上传
            'onUploadstarted': function (uploadInfo) {
                // var uploadAuth = document.getElementById('uploadAuth').value;
                // var uploadAddress = document.getElementById('uploadAddress').value;
                // var videoId = document.getElementById('videoId').value;
                if (me.isVodMode()) {
                    if (!uploadInfo.videoId) {
                        // 这个文件没有上传异常
                        // mock 上传凭证，实际产品中需要通过接口获取
                        // 实际环境中调用调用点播的获取上传凭证接口
                        // https://help.aliyun.com/document_detail/55407.html?spm=a2c4g.11186623.6.629.CH7i3X
                        // 获取上传凭证后，调用setUploadAuthAndAddress
                        me.uploader.setUploadAuthAndAddress(uploadInfo, me.uploadAuth, me.uploadAddress, me.videoId);
                    } else {
                        // 如果videoId有值，根据videoId刷新上传凭证
                        // mock 上传凭证 实际产品中需要通过接口获取
                        // 实际环境中调用点播的刷新上传凭证接口，获取凭证
                        // https://help.aliyun.com/document_detail/55408.html?spm=a2c4g.11186623.6.630.BoYYcY
                        // 获取上传凭证后，调用setUploadAuthAndAddress
                        me.uploader.setUploadAuthAndAddress(uploadInfo, me.uploadAuth, me.uploadAddress);
                    }
                }
                // me.log('onUploadStarted:' + uploadInfo.file.name + ', endpoint:' + uploadInfo.endpoint + ', bucket:' + uploadInfo.bucket + ', object:' + uploadInfo.object);
            },
            // 文件上传成功
            'onUploadSucceed': function (uploadInfo) {
                // me.log('上传完成: ' + uploadInfo.file.name + ', endpoint:' + uploadInfo.endpoint + ', bucket:' + uploadInfo.bucket + ', object:' + uploadInfo.object);
                me.log('上传完成!');
            },
            // 文件上传失败
            'onUploadFailed': function (uploadInfo, code, message) {
                me.log('onUploadFailed: file:' + uploadInfo.file.name + ',code:' + code + ', message:' + message);
            },
            // 文件上传进度，单位：字节
            'onUploadProgress': function (uploadInfo, totalSize, loadedPercent) {
                me.log('视频名称:' + uploadInfo.file.name + ', 大小:' + totalSize + ', 进度:' + Math.ceil(loadedPercent * 100) + '%');
            },
            // 上传凭证超时
            'onUploadTokenExpired': function (uploadInfo) {
                me.log('onUploadTokenExpired');
                if (me.isVodMode()) {
                    // 实现时，根据uploadInfo.videoId从新获取UploadAuth
                    // 实际环境中调用点播的刷新上传凭证接口，获取凭证
                    // https://help.aliyun.com/document_detail/55408.html?spm=a2c4g.11186623.6.630.BoYYcY
                    // 获取上传凭证后，调用setUploadAuthAndAddress
                    // uploader.resumeUploadWithAuth(uploadAuth);
                }
            },
            // 全部文件上传结束
            'onUploadEnd': function(uploadInfo) {
                me.clearInputFile();
                me.$emit('message', me.videoDatas);
            }
        });
    },
    methods: {
        // 获取上传地址
        async fetchUpUrl() {
            const res = await this.$api.chapter.fetchVideoUpUrl(
                {
                    file_name: 'chapter.mp4',
                    file_size: 100,
                    title: ''
                }
            );
            if (res.success) {
                this.uploadAuth = res.data.upload_auth;
                this.uploadAddress = res.data.upload_address;
                this.videoId = res.data.video_id;
                this.videoDatas.videoId = res.data.video_id;
            } else {
                swal(
                    '' + res.msg + '',
                    '',
                    'error'
                );
            }
        },
        // 开始上传
        start: function () {
            this.log('开始上传');
            this.uploader.startUpload();
        },
        // 清空继续选择
        clearInputFile: function () {
            var ie = (navigator.appVersion.indexOf('MSIE') !== -1);
            if (ie) {
                var file = document.getElementById('files');
                var file2 = file.cloneNode(false);
                file2.addEventListener('change', this.selectFile);
                file.parentNode.replaceChild(file2, file);
            } else {
                document.getElementById('files').value = '';
            }
        },
        // 清日志
        clearLog: function () {
            var textarea = document.getElementById('textarea');
            textarea.options.length = 0;
        },
        // 打印日志
        log: function (value) {
            if (!value) {

            }
            var textarea = document.getElementById('textarea');
            var len = textarea.options.length;
            if (len > 0 && textarea.options[len - 1].value.substring(0, 40) === value.substring(0, 40)) {
                textarea.remove(len - 1);
            } else if (len > 25) {
                textarea.remove(0);
            }

            var option = document.createElement('option');
            option.value = value;
            option.innerHTML = value;
            textarea.appendChild(option);
        },
        isVodMode: function () {
            return (this.uploadAuth && this.uploadAuth.length > 0);
        },
        // 点播上传。每次上传都是独立的鉴权，所以初始化时，不需要设置鉴权
        // 临时账号过期时，在onUploadTokenExpired事件中，用resumeWithToken更新临时账号，上传会续传。
        selectFile: function (event) {
            this.fetchUpUrl();
            var userData;
            if (this.isVodMode()) {
                userData = '{"Vod":{"UserData":{"IsShowWaterMark":"false","Priority":"7"}}}';
            } else {
                userData = '{"Vod":{"Title":"this is title.我是标题","Description":"this is desc.我是描述","CateId":"19","Tags":"tag1,tag2,标签3","UserData":"user data"}}';
            }

            for (var i = 0; i < event.target.files.length; i++) {
                this.log('添加视频: ' + event.target.files[i].name);
                if (this.isVodMode()) {
                    // 点播上传。每次上传都是独立的OSS object，所以添加文件时，不需要设置OSS的属性
                    this.uploader.cleanList();
                    this.uploader.addFile(event.target.files[i], null, null, null, userData);
                }
            }
        }
    },
    watch: {
        'videoData': function () {
            this.videoDatas = this.videoData;
        }
    }
};
</script>

<style lang="scss">
    .video_upload{
        #files{
            display: inline-block;
        }
        #files,#clearInputFile,#video_start,#clearLog{
            height: 30px;
            line-height: 30px;
            padding: 0 15px;
        }
        #video_start{
            margin:15px;
        }
    }

</style>
