Page({
  data: {
    list: []
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://app-test.transparency-one.com/Plateform.UI/api/search/',
      method: 'POST',
      data: {
        "Id": "Request",
        "Term": "",
        "Filters": [{ "Name": "direction", "Value": "outbound" }, {
          "Name": "requestState",
          "Value": "pending,accepted"
        }, { "Name": "requestTypeName", "Value": "visibility,associate_source,new_user_account_validation" }],
        "PageSize": 5,
        "StartIndex": 0
      },
      header: {
        'Cookie': 'FedAuth=77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U2VjdXJpdHlDb250ZXh0VG9rZW4gcDE6SWQ9Il9iNzExNTNmNy03NzZlLTRhMmUtYTUxNS1lOWZhZjQxYmY2NWQtQ0YxNkJDREFGNTI2NEVFOUJFOTBBNzczODc1QjczMjIiIHhtbG5zOnAxPSJodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy93c3MvMjAwNC8wMS9vYXNpcy0yMDA0MDEtd3NzLXdzc2VjdXJpdHktdXRpbGl0eS0xLjAueHNkIiB4bWxucz0iaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcvd3Mtc3gvd3Mtc2VjdXJlY29udmVyc2F0aW9uLzIwMDUxMiI+PElkZW50aWZpZXI+dXJuOnV1aWQ6YmFmZGQwYTYtZDFkOC00ZjVkLTllZTYtNWU5ZWNlNTc4ZDdkPC9JZGVudGlmaWVyPjxDb29raWUgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwNi8wNS9zZWN1cml0eSI+WDdUcE1BQmlJS3JBL1ZMektKa1JoUGx6R0dPU0cxdkVXTkl0ekRwZXJkaVZVNUNic3RKWE5NNlhGYnhMcS9TWmxuSlBiMkZQY3lLdVNnWHNKeU9pblRpUi90aGlmUXdnU3ZzeW5KYkwxQmN0cGs2MkpEUnVoVkFjTzhuUzdXa2pad3dQOWV1YVFEZUJOR2FTd2EwQXVrT01WVEhteTNiQXhBMzFMN0Uyd2hYNFdsQXdCSlViU0gxM2ovQ0Nkc0Y2VEo1elQ0R2s1aWhIbVA1dGtFN1BNWXMzQXFnSnNRdGd1cm9SSzVDT293dWhvaTBJdlZjdmc1TUdVNmtOaU5vVXN3dHpoR1FVSjZSR1A2N2c2bjB3UTF2RkdnRzU0ZVVjWjBaeEtiZHh5b3lqV2RrcHhGVGJxUXREOFVRNW43Y25GeDZQTnZ4b1JsRjlVT3djSFVXcmo4Skkva001UG1rYkhzNGtRVUtnZDM3ZjdWNHVvUmg0Uzl6QlczN1lsdjdScXlCME84SEh0QnFOYzRuNDQySjdoczBoWlR1T0RKZklVZ2ljeUFBWi95RlFTcU5GNmVyVUJTQ3VLaFRzYWtDRi9NZ2pWSnBsRlhZeENYMXBMK0hwTGd6amRGK0NmTUlqa2s3T0w4eERMeTF2Y2RJcG9JbXZSWnM5MTJUQU5LR0tXc2tuU2NDYUFoK2gwZHg2RTc2eGlidDk0T1JXRnVVWE00WEhZeWVwRWd5NnFiNUR2cngwajdpQUhBYjNadFhkb3BOaTVUOTJJVi9nMExFUCtOWXVUUmdEZCtrTlpMSlI2VEVBMGFqNzJVNGJmcld6aVlDa2UxSUdzT3FEOFBIMVArbDlYN0owdmxhYWdzcmtpaUVGM3krZkplMW5pQ2xjK0JKZGhoRDE4a01LRFdJU3hlNmNGTEozaTFGUVVtakp2WlZRTGZrOXFVVmdjZVlIUDR1OTA0dkFNdWErSUJvdVNRclQxRmNnU3pBTERucVdmZE0vRlFlVzNPaHkrbHg1a0VJa1FrYWdUM0Q0bEI3SnVRS1B5Q1I2bm1PdTZMMGh6Zy9aaTJRUzVFMHNTRUx4NlY2WlhrRXNpQ3Q3UlBIbkF6TFFZYWZibzZ2UkZodWRUbnI3NTFzMUh3TytmQnpTZ1dlMkR6VW9YVUV6U1ExRE81ZUFsazdJbmVlYWZFNjk5azRldHlUVVRPUituS2hXaXJ5UjYwSm1UZmZ5WWVDc3g5Y0VLRDg1ZEtFV2p2bVdPZVVhaENKUnVvcmYrUWhPNGpjQUd3SlpCRlhIOHIwUnkzdGhRK2lRdzBpYk9WTUNPTkZobzBVeG9VWT08L0Nvb2tpZT48L1NlY3VyaXR5Q29udGV4dFRva2VuPg==',
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          request_list: res.data.Items
        })
      }
    })
  }
})