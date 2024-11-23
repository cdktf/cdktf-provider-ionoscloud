# `s3Object` Submodule <a name="`s3Object` Submodule" id="@cdktf/provider-ionoscloud.s3Object"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Object <a name="S3Object" id="@cdktf/provider-ionoscloud.s3Object.S3Object"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object ionoscloud_s3_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_object.S3Object;

S3Object.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bucket(java.lang.String)
    .key(java.lang.String)
//  .cacheControl(java.lang.String)
//  .content(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .expires(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .mfa(java.lang.String)
//  .objectLockLegalHold(java.lang.String)
//  .objectLockMode(java.lang.String)
//  .objectLockRetainUntilDate(java.lang.String)
//  .requestPayer(java.lang.String)
//  .serverSideEncryption(java.lang.String)
//  .serverSideEncryptionContext(java.lang.String)
//  .serverSideEncryptionCustomerAlgorithm(java.lang.String)
//  .serverSideEncryptionCustomerKey(java.lang.String)
//  .serverSideEncryptionCustomerKeyMd5(java.lang.String)
//  .source(java.lang.String)
//  .storageClass(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .websiteRedirect(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | The key of the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Can be used to specify caching behavior along the request/reply chain. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | The utf-8 content of the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Specifies presentational information for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | The natural language or languages of the intended audience for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | A standard MIME type describing the format of the contents. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.expires">expires</a></code> | <code>java.lang.String</code> | The date and time at which the object is no longer cacheable. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to delete the object even if it has a governance-type Object Lock in place. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of metadata to store with the object in IONOS Object Storage Object Storage. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.mfa">mfa</a></code> | <code>java.lang.String</code> | The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.objectLockLegalHold">objectLockLegalHold</a></code> | <code>java.lang.String</code> | Specifies whether a legal hold will be applied to this object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.objectLockMode">objectLockMode</a></code> | <code>java.lang.String</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>java.lang.String</code> | The date and time when you want this object's Object Lock to expire. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.requestPayer">requestPayer</a></code> | <code>java.lang.String</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | The server-side encryption algorithm used when storing this object in IONOS Object Storage Object Storage (AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionContext">serverSideEncryptionContext</a></code> | <code>java.lang.String</code> | Specifies the IONOS Object Storage Object Storage Encryption Context to use for object encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionCustomerAlgorithm">serverSideEncryptionCustomerAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the algorithm to use to when encrypting the object (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionCustomerKey">serverSideEncryptionCustomerKey</a></code> | <code>java.lang.String</code> | Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionCustomerKeyMd5">serverSideEncryptionCustomerKeyMd5</a></code> | <code>java.lang.String</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | The path to the file to upload. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The storage class of the object. Valid value is 'STANDARD'. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tag-set for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#bucket S3Object#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.key"></a>

- *Type:* java.lang.String

The key of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#key S3Object#key}

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.cacheControl"></a>

- *Type:* java.lang.String

Can be used to specify caching behavior along the request/reply chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#cache_control S3Object#cache_control}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.content"></a>

- *Type:* java.lang.String

The utf-8 content of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#content S3Object#content}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentDisposition"></a>

- *Type:* java.lang.String

Specifies presentational information for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#content_disposition S3Object#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentEncoding"></a>

- *Type:* java.lang.String

Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#content_encoding S3Object#content_encoding}

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentLanguage"></a>

- *Type:* java.lang.String

The natural language or languages of the intended audience for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#content_language S3Object#content_language}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

A standard MIME type describing the format of the contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#content_type S3Object#content_type}

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.expires"></a>

- *Type:* java.lang.String

The date and time at which the object is no longer cacheable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#expires S3Object#expires}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to delete the object even if it has a governance-type Object Lock in place.

You must explicitly pass a value of true for this parameter to delete the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#force_destroy S3Object#force_destroy}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of metadata to store with the object in IONOS Object Storage Object Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#metadata S3Object#metadata}

---

##### `mfa`<sup>Optional</sup> <a name="mfa" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.mfa"></a>

- *Type:* java.lang.String

The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.

Required to permanently delete a versioned object if versioning is configured with MFA Delete enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#mfa S3Object#mfa}

---

##### `objectLockLegalHold`<sup>Optional</sup> <a name="objectLockLegalHold" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.objectLockLegalHold"></a>

- *Type:* java.lang.String

Specifies whether a legal hold will be applied to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#object_lock_legal_hold S3Object#object_lock_legal_hold}

---

##### `objectLockMode`<sup>Optional</sup> <a name="objectLockMode" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.objectLockMode"></a>

- *Type:* java.lang.String

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.objectLockRetainUntilDate"></a>

- *Type:* java.lang.String

The date and time when you want this object's Object Lock to expire.

Must be formatted as a timestamp parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}

---

##### `requestPayer`<sup>Optional</sup> <a name="requestPayer" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.requestPayer"></a>

- *Type:* java.lang.String

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#request_payer S3Object#request_payer}

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryption"></a>

- *Type:* java.lang.String

The server-side encryption algorithm used when storing this object in IONOS Object Storage Object Storage (AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}

---

##### `serverSideEncryptionContext`<sup>Optional</sup> <a name="serverSideEncryptionContext" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionContext"></a>

- *Type:* java.lang.String

Specifies the IONOS Object Storage Object Storage Encryption Context to use for object encryption.

The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#server_side_encryption_context S3Object#server_side_encryption_context}

---

##### `serverSideEncryptionCustomerAlgorithm`<sup>Optional</sup> <a name="serverSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionCustomerAlgorithm"></a>

- *Type:* java.lang.String

Specifies the algorithm to use to when encrypting the object (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#server_side_encryption_customer_algorithm S3Object#server_side_encryption_customer_algorithm}

---

##### `serverSideEncryptionCustomerKey`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionCustomerKey"></a>

- *Type:* java.lang.String

Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#server_side_encryption_customer_key S3Object#server_side_encryption_customer_key}

---

##### `serverSideEncryptionCustomerKeyMd5`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionCustomerKeyMd5"></a>

- *Type:* java.lang.String

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#server_side_encryption_customer_key_md5 S3Object#server_side_encryption_customer_key_md5}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.source"></a>

- *Type:* java.lang.String

The path to the file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#source S3Object#source}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.storageClass"></a>

- *Type:* java.lang.String

The storage class of the object. Valid value is 'STANDARD'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#storage_class S3Object#storage_class}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tag-set for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#tags S3Object#tags}

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.websiteRedirect"></a>

- *Type:* java.lang.String

If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL.

IONOS Object Storage Object Storage stores the value of this header in the object metadata

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#website_redirect S3Object#website_redirect}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetExpires">resetExpires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetMfa">resetMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockLegalHold">resetObjectLockLegalHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockMode">resetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockRetainUntilDate">resetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetRequestPayer">resetRequestPayer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionContext">resetServerSideEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerAlgorithm">resetServerSideEncryptionCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKey">resetServerSideEncryptionCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKeyMd5">resetServerSideEncryptionCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetWebsiteRedirect">resetWebsiteRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.s3Object.S3Object.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetCacheControl"></a>

```java
public void resetCacheControl()
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentDisposition"></a>

```java
public void resetContentDisposition()
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentEncoding"></a>

```java
public void resetContentEncoding()
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentLanguage"></a>

```java
public void resetContentLanguage()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetExpires` <a name="resetExpires" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetExpires"></a>

```java
public void resetExpires()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMfa` <a name="resetMfa" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetMfa"></a>

```java
public void resetMfa()
```

##### `resetObjectLockLegalHold` <a name="resetObjectLockLegalHold" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockLegalHold"></a>

```java
public void resetObjectLockLegalHold()
```

##### `resetObjectLockMode` <a name="resetObjectLockMode" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockMode"></a>

```java
public void resetObjectLockMode()
```

##### `resetObjectLockRetainUntilDate` <a name="resetObjectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockRetainUntilDate"></a>

```java
public void resetObjectLockRetainUntilDate()
```

##### `resetRequestPayer` <a name="resetRequestPayer" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetRequestPayer"></a>

```java
public void resetRequestPayer()
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryption"></a>

```java
public void resetServerSideEncryption()
```

##### `resetServerSideEncryptionContext` <a name="resetServerSideEncryptionContext" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionContext"></a>

```java
public void resetServerSideEncryptionContext()
```

##### `resetServerSideEncryptionCustomerAlgorithm` <a name="resetServerSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerAlgorithm"></a>

```java
public void resetServerSideEncryptionCustomerAlgorithm()
```

##### `resetServerSideEncryptionCustomerKey` <a name="resetServerSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKey"></a>

```java
public void resetServerSideEncryptionCustomerKey()
```

##### `resetServerSideEncryptionCustomerKeyMd5` <a name="resetServerSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKeyMd5"></a>

```java
public void resetServerSideEncryptionCustomerKeyMd5()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetSource"></a>

```java
public void resetSource()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetStorageClass"></a>

```java
public void resetStorageClass()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetTags"></a>

```java
public void resetTags()
```

##### `resetWebsiteRedirect` <a name="resetWebsiteRedirect" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetWebsiteRedirect"></a>

```java
public void resetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_object.S3Object;

S3Object.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_object.S3Object;

S3Object.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_object.S3Object;

S3Object.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_object.S3Object;

S3Object.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3Object.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3Object to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3Object that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the S3Object to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControlInput">cacheControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDispositionInput">contentDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncodingInput">contentEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguageInput">contentLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.expiresInput">expiresInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfaInput">mfaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHoldInput">objectLockLegalHoldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockModeInput">objectLockModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDateInput">objectLockRetainUntilDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayerInput">requestPayerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContextInput">serverSideEncryptionContextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithmInput">serverSideEncryptionCustomerAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyInput">serverSideEncryptionCustomerKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5Input">serverSideEncryptionCustomerKeyMd5Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirectInput">websiteRedirectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.expires">expires</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfa">mfa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHold">objectLockLegalHold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockMode">objectLockMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayer">requestPayer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContext">serverSideEncryptionContext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithm">serverSideEncryptionCustomerAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKey">serverSideEncryptionCustomerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5">serverSideEncryptionCustomerKeyMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControlInput"></a>

```java
public java.lang.String getCacheControlInput();
```

- *Type:* java.lang.String

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDispositionInput"></a>

```java
public java.lang.String getContentDispositionInput();
```

- *Type:* java.lang.String

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncodingInput"></a>

```java
public java.lang.String getContentEncodingInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguageInput"></a>

```java
public java.lang.String getContentLanguageInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `expiresInput`<sup>Optional</sup> <a name="expiresInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.expiresInput"></a>

```java
public java.lang.String getExpiresInput();
```

- *Type:* java.lang.String

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mfaInput`<sup>Optional</sup> <a name="mfaInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfaInput"></a>

```java
public java.lang.String getMfaInput();
```

- *Type:* java.lang.String

---

##### `objectLockLegalHoldInput`<sup>Optional</sup> <a name="objectLockLegalHoldInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHoldInput"></a>

```java
public java.lang.String getObjectLockLegalHoldInput();
```

- *Type:* java.lang.String

---

##### `objectLockModeInput`<sup>Optional</sup> <a name="objectLockModeInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockModeInput"></a>

```java
public java.lang.String getObjectLockModeInput();
```

- *Type:* java.lang.String

---

##### `objectLockRetainUntilDateInput`<sup>Optional</sup> <a name="objectLockRetainUntilDateInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDateInput"></a>

```java
public java.lang.String getObjectLockRetainUntilDateInput();
```

- *Type:* java.lang.String

---

##### `requestPayerInput`<sup>Optional</sup> <a name="requestPayerInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayerInput"></a>

```java
public java.lang.String getRequestPayerInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionContextInput`<sup>Optional</sup> <a name="serverSideEncryptionContextInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContextInput"></a>

```java
public java.lang.String getServerSideEncryptionContextInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionCustomerAlgorithmInput`<sup>Optional</sup> <a name="serverSideEncryptionCustomerAlgorithmInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithmInput"></a>

```java
public java.lang.String getServerSideEncryptionCustomerAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionCustomerKeyInput`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyInput"></a>

```java
public java.lang.String getServerSideEncryptionCustomerKeyInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionCustomerKeyMd5Input`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyMd5Input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5Input"></a>

```java
public java.lang.String getServerSideEncryptionCustomerKeyMd5Input();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionInput"></a>

```java
public java.lang.String getServerSideEncryptionInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `websiteRedirectInput`<sup>Optional</sup> <a name="websiteRedirectInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirectInput"></a>

```java
public java.lang.String getWebsiteRedirectInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.expires"></a>

```java
public java.lang.String getExpires();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mfa`<sup>Required</sup> <a name="mfa" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfa"></a>

```java
public java.lang.String getMfa();
```

- *Type:* java.lang.String

---

##### `objectLockLegalHold`<sup>Required</sup> <a name="objectLockLegalHold" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHold"></a>

```java
public java.lang.String getObjectLockLegalHold();
```

- *Type:* java.lang.String

---

##### `objectLockMode`<sup>Required</sup> <a name="objectLockMode" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockMode"></a>

```java
public java.lang.String getObjectLockMode();
```

- *Type:* java.lang.String

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDate"></a>

```java
public java.lang.String getObjectLockRetainUntilDate();
```

- *Type:* java.lang.String

---

##### `requestPayer`<sup>Required</sup> <a name="requestPayer" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayer"></a>

```java
public java.lang.String getRequestPayer();
```

- *Type:* java.lang.String

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryption"></a>

```java
public java.lang.String getServerSideEncryption();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionContext`<sup>Required</sup> <a name="serverSideEncryptionContext" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContext"></a>

```java
public java.lang.String getServerSideEncryptionContext();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionCustomerAlgorithm`<sup>Required</sup> <a name="serverSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithm"></a>

```java
public java.lang.String getServerSideEncryptionCustomerAlgorithm();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionCustomerKey`<sup>Required</sup> <a name="serverSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKey"></a>

```java
public java.lang.String getServerSideEncryptionCustomerKey();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionCustomerKeyMd5`<sup>Required</sup> <a name="serverSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5"></a>

```java
public java.lang.String getServerSideEncryptionCustomerKeyMd5();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `websiteRedirect`<sup>Required</sup> <a name="websiteRedirect" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirect"></a>

```java
public java.lang.String getWebsiteRedirect();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectConfig <a name="S3ObjectConfig" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_object.S3ObjectConfig;

S3ObjectConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bucket(java.lang.String)
    .key(java.lang.String)
//  .cacheControl(java.lang.String)
//  .content(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .expires(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .mfa(java.lang.String)
//  .objectLockLegalHold(java.lang.String)
//  .objectLockMode(java.lang.String)
//  .objectLockRetainUntilDate(java.lang.String)
//  .requestPayer(java.lang.String)
//  .serverSideEncryption(java.lang.String)
//  .serverSideEncryptionContext(java.lang.String)
//  .serverSideEncryptionCustomerAlgorithm(java.lang.String)
//  .serverSideEncryptionCustomerKey(java.lang.String)
//  .serverSideEncryptionCustomerKeyMd5(java.lang.String)
//  .source(java.lang.String)
//  .storageClass(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .websiteRedirect(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.key">key</a></code> | <code>java.lang.String</code> | The key of the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Can be used to specify caching behavior along the request/reply chain. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.content">content</a></code> | <code>java.lang.String</code> | The utf-8 content of the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Specifies presentational information for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | The natural language or languages of the intended audience for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | A standard MIME type describing the format of the contents. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.expires">expires</a></code> | <code>java.lang.String</code> | The date and time at which the object is no longer cacheable. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to delete the object even if it has a governance-type Object Lock in place. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of metadata to store with the object in IONOS Object Storage Object Storage. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.mfa">mfa</a></code> | <code>java.lang.String</code> | The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockLegalHold">objectLockLegalHold</a></code> | <code>java.lang.String</code> | Specifies whether a legal hold will be applied to this object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockMode">objectLockMode</a></code> | <code>java.lang.String</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>java.lang.String</code> | The date and time when you want this object's Object Lock to expire. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.requestPayer">requestPayer</a></code> | <code>java.lang.String</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | The server-side encryption algorithm used when storing this object in IONOS Object Storage Object Storage (AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionContext">serverSideEncryptionContext</a></code> | <code>java.lang.String</code> | Specifies the IONOS Object Storage Object Storage Encryption Context to use for object encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerAlgorithm">serverSideEncryptionCustomerAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the algorithm to use to when encrypting the object (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKey">serverSideEncryptionCustomerKey</a></code> | <code>java.lang.String</code> | Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKeyMd5">serverSideEncryptionCustomerKeyMd5</a></code> | <code>java.lang.String</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.source">source</a></code> | <code>java.lang.String</code> | The path to the file to upload. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The storage class of the object. Valid value is 'STANDARD'. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tag-set for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#bucket S3Object#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#key S3Object#key}

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

Can be used to specify caching behavior along the request/reply chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#cache_control S3Object#cache_control}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The utf-8 content of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#content S3Object#content}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

Specifies presentational information for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#content_disposition S3Object#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#content_encoding S3Object#content_encoding}

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

The natural language or languages of the intended audience for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#content_language S3Object#content_language}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

A standard MIME type describing the format of the contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#content_type S3Object#content_type}

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.expires"></a>

```java
public java.lang.String getExpires();
```

- *Type:* java.lang.String

The date and time at which the object is no longer cacheable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#expires S3Object#expires}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to delete the object even if it has a governance-type Object Lock in place.

You must explicitly pass a value of true for this parameter to delete the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#force_destroy S3Object#force_destroy}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of metadata to store with the object in IONOS Object Storage Object Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#metadata S3Object#metadata}

---

##### `mfa`<sup>Optional</sup> <a name="mfa" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.mfa"></a>

```java
public java.lang.String getMfa();
```

- *Type:* java.lang.String

The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.

Required to permanently delete a versioned object if versioning is configured with MFA Delete enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#mfa S3Object#mfa}

---

##### `objectLockLegalHold`<sup>Optional</sup> <a name="objectLockLegalHold" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockLegalHold"></a>

```java
public java.lang.String getObjectLockLegalHold();
```

- *Type:* java.lang.String

Specifies whether a legal hold will be applied to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#object_lock_legal_hold S3Object#object_lock_legal_hold}

---

##### `objectLockMode`<sup>Optional</sup> <a name="objectLockMode" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockMode"></a>

```java
public java.lang.String getObjectLockMode();
```

- *Type:* java.lang.String

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate"></a>

```java
public java.lang.String getObjectLockRetainUntilDate();
```

- *Type:* java.lang.String

The date and time when you want this object's Object Lock to expire.

Must be formatted as a timestamp parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}

---

##### `requestPayer`<sup>Optional</sup> <a name="requestPayer" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.requestPayer"></a>

```java
public java.lang.String getRequestPayer();
```

- *Type:* java.lang.String

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#request_payer S3Object#request_payer}

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryption"></a>

```java
public java.lang.String getServerSideEncryption();
```

- *Type:* java.lang.String

The server-side encryption algorithm used when storing this object in IONOS Object Storage Object Storage (AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}

---

##### `serverSideEncryptionContext`<sup>Optional</sup> <a name="serverSideEncryptionContext" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionContext"></a>

```java
public java.lang.String getServerSideEncryptionContext();
```

- *Type:* java.lang.String

Specifies the IONOS Object Storage Object Storage Encryption Context to use for object encryption.

The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#server_side_encryption_context S3Object#server_side_encryption_context}

---

##### `serverSideEncryptionCustomerAlgorithm`<sup>Optional</sup> <a name="serverSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerAlgorithm"></a>

```java
public java.lang.String getServerSideEncryptionCustomerAlgorithm();
```

- *Type:* java.lang.String

Specifies the algorithm to use to when encrypting the object (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#server_side_encryption_customer_algorithm S3Object#server_side_encryption_customer_algorithm}

---

##### `serverSideEncryptionCustomerKey`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKey"></a>

```java
public java.lang.String getServerSideEncryptionCustomerKey();
```

- *Type:* java.lang.String

Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#server_side_encryption_customer_key S3Object#server_side_encryption_customer_key}

---

##### `serverSideEncryptionCustomerKeyMd5`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKeyMd5"></a>

```java
public java.lang.String getServerSideEncryptionCustomerKeyMd5();
```

- *Type:* java.lang.String

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#server_side_encryption_customer_key_md5 S3Object#server_side_encryption_customer_key_md5}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The path to the file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#source S3Object#source}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

The storage class of the object. Valid value is 'STANDARD'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#storage_class S3Object#storage_class}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tag-set for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#tags S3Object#tags}

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.websiteRedirect"></a>

```java
public java.lang.String getWebsiteRedirect();
```

- *Type:* java.lang.String

If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL.

IONOS Object Storage Object Storage stores the value of this header in the object metadata

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.3/docs/resources/s3_object#website_redirect S3Object#website_redirect}

---



