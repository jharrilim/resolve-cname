# resolve-cname

Resolves CNAME records for the hostname that is passed to it, and returns the CNAME records as an array of strings.

## Host

```sh
now
```

## Invoke

### GET

#### URL

```txt
https://resolve-cname.josephharrisonlim.now.sh/api?hostname=www.linkedin.com
```

or

### POST

#### URL

```txt
https://resolve-cname.josephharrisonlim.now.sh/api
```

#### Body

```json
{
    "hostname": "www.linkedin.com"
}
```
