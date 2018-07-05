<template>
    <div class="video_upload">
        点播上传配置
        <hr />
        <table frame=void width="100%">
            <tr>
                <td>uploadAuth:</td>
                <td><input type="text" id="uploadAuth" size="20" value="eyJTZWN1cml0eVRva2VuIjoiQ0FJUzB3UjFxNkZ0NUIyeWZTaklyNHZYR01yemxMdGozWTZ4TlZLSTAyWWVTUHNkcnAveWlEejJJSGhKZVhOdkJPMGV0ZjQrbVdCWTdQY1lsclVxRnNRWkh4V2ZOWk11dDhvTHJWbjlKcGZadjh1ODRZQURpNUNqUWRsWjhhSlZtSjI4V2Y3d2FmK0FVQkxHQ1RtZDVNQVlvOWJUY1RHbFFDWnVXLy90b0pWN2I5TVJjeENsWkQ1ZGZybC9MUmRqcjhsbzF4R3pVUEcyS1V6U24zYjNCa2hsc1JZZTcyUms4dmFIeGRhQXpSRGNnVmJtcUpjU3ZKK2pDNEM4WXM5Z0c1MTlYdHlwdm9weGJiR1Q4Q05aNXo5QTlxcDlrTTQ5L2l6YzdQNlFIMzViNFJpTkw4L1o3dFFOWHdoaWZmb2JIYTlZcmZIZ21OaGx2dkRTajQzdDF5dFZPZVpjWDBha1E1dTdrdTdaSFArb0x0OGphWXZqUDNQRTNyTHBNWUx1NFQ0OFpYVVNPRHREWWNaRFVIaHJFazRSVWpYZEk2T2Y4VXJXU1FDN1dzcjIxN290ZzdGeXlrM3M4TWFIQWtXTFg3U0IyRHdFQjRjNGFFb2tWVzRSeG5lelc2VUJhUkJwYmxkN0JxNmNWNWxPZEJSWm9LK0t6UXJKVFg5RXoycExtdUQ2ZS9MT3M3b0RWSjM3V1p0S3l1aDRZNDlkNFU4clZFalBRcWl5a1Qwa0ZncGZUSzFSemJQbU5MS205YmFCMjUvelcrUGREZTBkc1Znb0pWS0RwaUdXRzNSTE5uK3p0Sjl4YmtlRStzS1VscUxHcXA1cEdWWng3SUVCVkZpSUlZZGo4Z0ErdS9Mc3RCbksrNzY1RHk3dDRHczA5OTZmdmFzM3NCYzdKS2o4M3JYTjVHZU81Q3pCUDVOVXdwbUhCRGRkSmoyc1lHRjh6ZnlvZ1hZS21nc01pV25jT1d4RXN3bk1qem50SVpWQWlLM1dsaU1lVS8xSjVjM2NTaWE5K0Z0bkJlbUE2cTB3UmZoWWUrUkRRajQxV0wydlExdU5Hb0FCZ0dvaTRXMHphZFRHbU4rYTVwZWc1Q2V5TGgyei9kR3o4WU00VHlxTVo4cGFUQk5GZFoxZm0xSHNyV29DaHhQSEpqMHRqaEtpa2wzUC9UOStMVWE5bzVDL00yanp4Qk1wWFhoNmRvek8rWjlnQTkxR2NQM3hhWCtzQWtyallSaDlzZmEvaXdldnJSRlFKNVNmS0tnNk5rSS9xOEpRZW4zT1ZXTzc1T29saHd3PSIsIkFjY2Vzc0tleUlkIjoiU1RTLk5IYlNwR3lkQmpMWjd0OTdmS0R0MUFaWWoiLCJBY2Nlc3NLZXlTZWNyZXQiOiI1ell2dEdWYllVQnptVFE4djZISHlxclJ1SE5qZEdHTUxIQkpzZGJvNER4OCIsIkV4cGlyYXRpb24iOiIzNjAwIn0"></td>
                <td>uploadAddress:</td>
                <td><input type="text" id="uploadAddress" size="20" value="eyJFbmRwb2ludCI6Imh0dHBzOi8vb3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbSIsIkJ1Y2tldCI6Im91dGluLTJmYjFlYWE1N2I5NjExZTg5ZjU0MDAxNjNlMWM5MjU2IiwiRmlsZU5hbWUiOiJ2aWRlby8yYTE3MWY3Mi0xNjQ2YTRkYTJiZC0wMDA1LTczNWItY2QzLWUwMWM4Lm1wNCJ9"></td>
                <td>videoId:</td>
                <td><input type="text" id="videoId" size="20" value="d93d6990e3bd42fbbd19fa2c921d88cd"></td>
                <td style="">uploadAuth及uploadAddress参数请查看<a href="https://help.aliyun.com/document_detail/52227.html?spm=5176.doc52200.2.4.yoajJn" target="_blank">获取上传地址和凭证 </a></td>
            </tr>
        </table>
        <hr />
        STS上传配置
        <hr />
        <table frame=void width="100%">
            <tr>
                <td>accessKeyId:</td>
                <td><input type="text" id="accessKeyId" size="20" value=""></td>
                <td>accessKeySecret:</td>
                <td><input type="text" id="accessKeySecret" size="40" value=""></td>
            </tr>
            <tr>
                <td>secretToken:</td>
                <td><input type="text" id="secretToken" size="40" value=""></td>
                <td></td>
                <td>点播STS参数如何获取，请查阅<a href=" https://help.aliyun.com/document_detail/28788.html?spm=a2c4g.11186623.2.6.1mSfTK" target="_blakn"> 获取STS</a></td>
            </tr>
            <tr>
                <td>endpoint:</td>
                <!-- oss-cn-shanghai.aliyuncs.com -->
                <!-- in-20170320144514766-hte7xhqk1t -->
                <!-- video/50659345-16127742b75-0004-a1f7-953-f8a30 -->
                <td><input type="text" id="endpoint" size="40" value=""></td>
                <td>bucket: </td>
                <td><input type="text" id="bucket" size="20" value=""></td>
            </tr>
            <tr>
                <td>object路径:</td>
                <td><input type="text" id="objectPre" size="20" value=""></td>

            </tr>
            <tr>
                <td></td>
                <td>以上相关参数如何获取，请查阅<a href="https://help.aliyun.com/document_detail/31867.html?spm=5176.doc31848.2.21.KS9R7q" target="_blakn"> OSS访问与控制文档</a></td>

            </tr>
        </table>
        <hr />
        文件管理
        <hr />
        <input type="file" name="file" id="files" multiple @change="selectFile"/>
        <button type="button" @click="clearInputFile()">清空继续选择</button>
        <button type="button" @click="deleteFile()">删除文件</button>
        <input type="text" id="deleteIndex" size="3" value="0">
        <button type="button" @click="cancelFile()">取消文件</button>
        <input type="text" id="cancelIndex" size="3" value="0">

        <button type="button" @click="resumeFile()">恢复文件</button>
        <input type="text" id="resumeIndex" size="3" value="0">
        <hr />
        列表管理
        <hr />
        <button type="button" @click="getList()">获取上传列表</button>
        <button type="button" @click="clearList()">清理上传列表</button>
        <hr />
        上传管理
        <hr/>
        <button type="button" @click="start()">开始上传</button>
        <button type="button" @click="stop()">停止上传</button>
        <!--  <button type="button" onclick="stop()">停止上传</button> -->
        <button type="button" @click="resumeWithToken()">token过期恢复上传</button>
        <hr />
        <select multiple="multiple" id="textarea"
                style="position:relative; width:90%; height:450px; vertical-align:top; border:1px solid #cccccc;">
        </select>
        <button type="button" @click="clearLog()">清日志</button>
    </div>
</template>

<script>
import swal from 'sweetalert2';

export default {
    name: 'uploadVideo',
    data() {
        return {
            videoUpdate: {
                upload_address: '',
                upload_auth: '',
                video_id: ''
            },
            uploader: ''
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
                var uploadAuth = document.getElementById('uploadAuth').value;
                var uploadAddress = document.getElementById('uploadAddress').value;
                var videoId = document.getElementById('videoId').value;
                if (me.isVodMode()) {
                    if (!uploadInfo.videoId) { // 这个文件没有上传异常
                        // mock 上传凭证，实际产品中需要通过接口获取
                        // 实际环境中调用调用点播的获取上传凭证接口
                        // https://help.aliyun.com/document_detail/55407.html?spm=a2c4g.11186623.6.629.CH7i3X
                        // 获取上传凭证后，调用setUploadAuthAndAddress
                        me.uploader.setUploadAuthAndAddress(uploadInfo, uploadAuth, uploadAddress, videoId);
                    } else { // 如果videoId有值，根据videoId刷新上传凭证
                        // mock 上传凭证 实际产品中需要通过接口获取
                        // 实际环境中调用点播的刷新上传凭证接口，获取凭证
                        // https://help.aliyun.com/document_detail/55408.html?spm=a2c4g.11186623.6.630.BoYYcY
                        // 获取上传凭证后，调用setUploadAuthAndAddress
                        me.uploader.setUploadAuthAndAddress(uploadInfo, uploadAuth, uploadAddress);
                    }
                } else if (me.isSTSMode()) {
                    var accessKeyId = document.getElementById('accessKeyId').value;
                    var accessKeySecret = document.getElementById('accessKeySecret').value;
                    var secretToken = document.getElementById('secretToken').value;
                    me.uploader.setSTSToken(uploadInfo, accessKeyId, accessKeySecret, secretToken, 'test');
                }
                me.log('onUploadStarted:' + uploadInfo.file.name + ', endpoint:' + uploadInfo.endpoint + ', bucket:' + uploadInfo.bucket + ', object:' + uploadInfo.object);
            },
            // 文件上传成功
            'onUploadSucceed': function (uploadInfo) {
                me.log('onUploadSucceed: ' + uploadInfo.file.name + ', endpoint:' + uploadInfo.endpoint + ', bucket:' + uploadInfo.bucket + ', object:' + uploadInfo.object);
            },
            // 文件上传失败
            'onUploadFailed': function (uploadInfo, code, message) {
                me.log('onUploadFailed: file:' + uploadInfo.file.name + ',code:' + code + ', message:' + message);
            },
            // 文件上传进度，单位：字节
            'onUploadProgress': function (uploadInfo, totalSize, loadedPercent) {
                me.log('onUploadProgress:file:' + uploadInfo.file.name + ', fileSize:' + totalSize + ', percent:' + Math.ceil(loadedPercent * 100) + '%');
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
                } else if (me.isSTSMode()) {
                    // 实现时，从新获取STS临时账号用于恢复上传
                    // uploader.resumeUploadWithSTSToken(accessKeyId, accessKeySecret, secretToken, expireTime);
                }
            },
            // 全部文件上传结束
            'onUploadEnd': function(uploadInfo) {
                me.log('onUploadEnd: uploaded all the files');
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
                this.videoUpdate = res.data;
            } else {
                swal(
                    '' + res.msg + '',
                    '',
                    'error'
                );
            }
        },
        start: function () {
            this.log('start upload.');
            this.uploader.startUpload();
        },
        stop: function () {
            this.log('stop upload.');
            this.uploader.stopUpload();
        },
        resumeWithToken: function () {
            this.log('resume upload with token.');
            var uploadAuth = document.getElementById('uploadAuth').value;

            var accessKeyId = document.getElementById('accessKeyId').value;
            var accessKeySecret = document.getElementById('accessKeySecret').value;
            var secretToken = document.getElementById('secretToken').value;

            if (this.isVodMode()) {
                this.uploader.resumeUploadWithAuth(uploadAuth);
            } else if (this.isSTSMode()) {
                this.uploader.resumeUploadWithSTSToken(accessKeyId, accessKeySecret, secretToken);
            }
        },
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
        clearList: function () {
            this.log('clean upload list.');
            this.uploader.cleanList();
        },
        getList: function () {
            this.log('get upload list.');
            var list = this.uploader.listFiles();
            for (var i = 0; i < list.length; i++) {
                this.log('file:' + list[i].file.name + ', status:' + list[i].state + ', endpoint:' + list[i].endpoint + ', bucket:' + list[i].bucket + ', object:' + list[i].object);
            }
        },
        deleteFile: function () {
            if (document.getElementById('deleteIndex').value) {
                var index = document.getElementById('deleteIndex').value;
                this.log('delete file index:' + index);
                this.uploader.deleteFile(index);
            }
        },
        cancelFile: function () {
            if (document.getElementById('cancelIndex').value) {
                var index = document.getElementById('cancelIndex').value;
                this.log('cancel file index:' + index);
                this.uploader.cancelFile(index);
            }
        },
        resumeFile: function () {
            if (document.getElementById('resumeIndex').value) {
                var index = document.getElementById('resumeIndex').value;
                this.log('resume file index:' + index);
                this.uploader.resumeFile(index);
            }
        },
        clearLog: function () {
            if (document.getElementById('resumeIndex').value) {
                var textarea = document.getElementById('textarea');
                textarea.options.length = 0;
            }
        },
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
            var uploadAuth = document.getElementById('uploadAuth').value;
            return (uploadAuth && uploadAuth.length > 0);
        },
        isSTSMode: function () {
            var secretToken = document.getElementById('secretToken').value;
            if (!this.isVodMode()) {
                if (secretToken && secretToken.length > 0) {
                    return true;
                }
            }
            return false;
        },
        // 点播上传。每次上传都是独立的鉴权，所以初始化时，不需要设置鉴权
        // 临时账号过期时，在onUploadTokenExpired事件中，用resumeWithToken更新临时账号，上传会续传。
        selectFile: function (event) {
            var endpoint = document.getElementById('endpoint').value;
            var bucket = document.getElementById('bucket').value;
            var objectPre = document.getElementById('objectPre').value;
            var userData;
            if (this.isVodMode()) {
                userData = '{"Vod":{"UserData":{"IsShowWaterMark":"false","Priority":"7"}}}';
            } else {
                userData = '{"Vod":{"Title":"this is title.我是标题","Description":"this is desc.我是描述","CateId":"19","Tags":"tag1,tag2,标签3","UserData":"user data"}}';
            }

            for (var i = 0; i < event.target.files.length; i++) {
                this.log('add file: ' + event.target.files[i].name);
                if (this.isVodMode()) {
                    // 点播上传。每次上传都是独立的OSS object，所以添加文件时，不需要设置OSS的属性
                    this.uploader.addFile(event.target.files[i], null, null, null, userData);
                } else if (this.isSTSMode()) {
                    // STS的上传方式，需要在userData里指定Title
                    var object = objectPre;
                    // if(objectPre)
                    // {
                    //     object = objectPre +"/"+ event.target.files[i].name;
                    // }
                    this.uploader.addFile(event.target.files[i], endpoint, bucket, object, userData);
                }
            }
        }
    }
};
</script>

<style lang="scss">

</style>
