# İETT Web Service

[iett-api](https://www.npmjs.com/package/iett-api) kullanarak geliştirilmiş bir web servisidir.


Örnek Request

/HatDurakGuzergah?method=GetGaraj&key=DurakKodu&value=106032

Response

```json
{
    "success": true,
    "data": [
        {
            "ID": 1,
            "GARAJ_ADI": "YUNUSGARAJI",
            "GARAJ_KODU": "PG_YUN",
            "KOORDINAT": "POINT (29.2064099677082 40.8892160187409)"
        }
    ],
    "error":null
}
```

İETT servislerinin endpoint ve parametreleri için  İBB nin yayınlamış olduğu dokümana erişim için [tıklayınız](https://data.ibb.gov.tr/dataset/3e32bb5d-2936-41eb-bdc7-65b843487e99/resource/6821f452-f6ff-49e9-940a-d4ebfc78f03e/download/iett-web-servis-kullanm-dokumanv.1.0.pdf)