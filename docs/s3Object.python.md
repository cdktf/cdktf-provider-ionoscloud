# `s3Object` Submodule <a name="`s3Object` Submodule" id="@cdktf/provider-ionoscloud.s3Object"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Object <a name="S3Object" id="@cdktf/provider-ionoscloud.s3Object.S3Object"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object ionoscloud_s3_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_object

s3Object.S3Object(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  key: str,
  cache_control: str = None,
  content: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  expires: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  metadata: typing.Mapping[str] = None,
  mfa: str = None,
  object_lock_legal_hold: str = None,
  object_lock_mode: str = None,
  object_lock_retain_until_date: str = None,
  request_payer: str = None,
  server_side_encryption: str = None,
  server_side_encryption_context: str = None,
  server_side_encryption_customer_algorithm: str = None,
  server_side_encryption_customer_key: str = None,
  server_side_encryption_customer_key_md5: str = None,
  source: str = None,
  storage_class: str = None,
  tags: typing.Mapping[str] = None,
  website_redirect: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.key">key</a></code> | <code>str</code> | The key of the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.cacheControl">cache_control</a></code> | <code>str</code> | Can be used to specify caching behavior along the request/reply chain. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.content">content</a></code> | <code>str</code> | The utf-8 content of the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentDisposition">content_disposition</a></code> | <code>str</code> | Specifies presentational information for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentEncoding">content_encoding</a></code> | <code>str</code> | Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentLanguage">content_language</a></code> | <code>str</code> | The natural language or languages of the intended audience for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | A standard MIME type describing the format of the contents. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.expires">expires</a></code> | <code>str</code> | The date and time at which the object is no longer cacheable. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to delete the object even if it has a governance-type Object Lock in place. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | A map of metadata to store with the object in IONOS Object Storage Object Storage. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.mfa">mfa</a></code> | <code>str</code> | The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.objectLockLegalHold">object_lock_legal_hold</a></code> | <code>str</code> | Specifies whether a legal hold will be applied to this object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.objectLockMode">object_lock_mode</a></code> | <code>str</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.objectLockRetainUntilDate">object_lock_retain_until_date</a></code> | <code>str</code> | The date and time when you want this object's Object Lock to expire. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.requestPayer">request_payer</a></code> | <code>str</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryption">server_side_encryption</a></code> | <code>str</code> | The server-side encryption algorithm used when storing this object in IONOS Object Storage Object Storage (AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionContext">server_side_encryption_context</a></code> | <code>str</code> | Specifies the IONOS Object Storage Object Storage Encryption Context to use for object encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionCustomerAlgorithm">server_side_encryption_customer_algorithm</a></code> | <code>str</code> | Specifies the algorithm to use to when encrypting the object (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionCustomerKey">server_side_encryption_customer_key</a></code> | <code>str</code> | Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionCustomerKeyMd5">server_side_encryption_customer_key_md5</a></code> | <code>str</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.source">source</a></code> | <code>str</code> | The path to the file to upload. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.storageClass">storage_class</a></code> | <code>str</code> | The storage class of the object. Valid value is 'STANDARD'. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tag-set for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.websiteRedirect">website_redirect</a></code> | <code>str</code> | If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.bucket"></a>

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#bucket S3Object#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.key"></a>

- *Type:* str

The key of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#key S3Object#key}

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.cacheControl"></a>

- *Type:* str

Can be used to specify caching behavior along the request/reply chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#cache_control S3Object#cache_control}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.content"></a>

- *Type:* str

The utf-8 content of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content S3Object#content}

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentDisposition"></a>

- *Type:* str

Specifies presentational information for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content_disposition S3Object#content_disposition}

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentEncoding"></a>

- *Type:* str

Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content_encoding S3Object#content_encoding}

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentLanguage"></a>

- *Type:* str

The natural language or languages of the intended audience for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content_language S3Object#content_language}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.contentType"></a>

- *Type:* str

A standard MIME type describing the format of the contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content_type S3Object#content_type}

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.expires"></a>

- *Type:* str

The date and time at which the object is no longer cacheable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#expires S3Object#expires}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to delete the object even if it has a governance-type Object Lock in place.

You must explicitly pass a value of true for this parameter to delete the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#force_destroy S3Object#force_destroy}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

A map of metadata to store with the object in IONOS Object Storage Object Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#metadata S3Object#metadata}

---

##### `mfa`<sup>Optional</sup> <a name="mfa" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.mfa"></a>

- *Type:* str

The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.

Required to permanently delete a versioned object if versioning is configured with MFA Delete enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#mfa S3Object#mfa}

---

##### `object_lock_legal_hold`<sup>Optional</sup> <a name="object_lock_legal_hold" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.objectLockLegalHold"></a>

- *Type:* str

Specifies whether a legal hold will be applied to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#object_lock_legal_hold S3Object#object_lock_legal_hold}

---

##### `object_lock_mode`<sup>Optional</sup> <a name="object_lock_mode" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.objectLockMode"></a>

- *Type:* str

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}

---

##### `object_lock_retain_until_date`<sup>Optional</sup> <a name="object_lock_retain_until_date" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.objectLockRetainUntilDate"></a>

- *Type:* str

The date and time when you want this object's Object Lock to expire.

Must be formatted as a timestamp parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}

---

##### `request_payer`<sup>Optional</sup> <a name="request_payer" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.requestPayer"></a>

- *Type:* str

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#request_payer S3Object#request_payer}

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryption"></a>

- *Type:* str

The server-side encryption algorithm used when storing this object in IONOS Object Storage Object Storage (AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}

---

##### `server_side_encryption_context`<sup>Optional</sup> <a name="server_side_encryption_context" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionContext"></a>

- *Type:* str

Specifies the IONOS Object Storage Object Storage Encryption Context to use for object encryption.

The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption_context S3Object#server_side_encryption_context}

---

##### `server_side_encryption_customer_algorithm`<sup>Optional</sup> <a name="server_side_encryption_customer_algorithm" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionCustomerAlgorithm"></a>

- *Type:* str

Specifies the algorithm to use to when encrypting the object (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption_customer_algorithm S3Object#server_side_encryption_customer_algorithm}

---

##### `server_side_encryption_customer_key`<sup>Optional</sup> <a name="server_side_encryption_customer_key" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionCustomerKey"></a>

- *Type:* str

Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption_customer_key S3Object#server_side_encryption_customer_key}

---

##### `server_side_encryption_customer_key_md5`<sup>Optional</sup> <a name="server_side_encryption_customer_key_md5" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.serverSideEncryptionCustomerKeyMd5"></a>

- *Type:* str

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption_customer_key_md5 S3Object#server_side_encryption_customer_key_md5}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.source"></a>

- *Type:* str

The path to the file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#source S3Object#source}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.storageClass"></a>

- *Type:* str

The storage class of the object. Valid value is 'STANDARD'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#storage_class S3Object#storage_class}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

The tag-set for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#tags S3Object#tags}

---

##### `website_redirect`<sup>Optional</sup> <a name="website_redirect" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.websiteRedirect"></a>

- *Type:* str

If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL.

IONOS Object Storage Object Storage stores the value of this header in the object metadata

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#website_redirect S3Object#website_redirect}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetCacheControl">reset_cache_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentDisposition">reset_content_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentEncoding">reset_content_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentLanguage">reset_content_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetExpires">reset_expires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetMfa">reset_mfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockLegalHold">reset_object_lock_legal_hold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockMode">reset_object_lock_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockRetainUntilDate">reset_object_lock_retain_until_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetRequestPayer">reset_request_payer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryption">reset_server_side_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionContext">reset_server_side_encryption_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerAlgorithm">reset_server_side_encryption_customer_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKey">reset_server_side_encryption_customer_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKeyMd5">reset_server_side_encryption_customer_key_md5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetStorageClass">reset_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetWebsiteRedirect">reset_website_redirect</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.s3Object.S3Object.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cache_control` <a name="reset_cache_control" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetCacheControl"></a>

```python
def reset_cache_control() -> None
```

##### `reset_content` <a name="reset_content" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_disposition` <a name="reset_content_disposition" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentDisposition"></a>

```python
def reset_content_disposition() -> None
```

##### `reset_content_encoding` <a name="reset_content_encoding" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentEncoding"></a>

```python
def reset_content_encoding() -> None
```

##### `reset_content_language` <a name="reset_content_language" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentLanguage"></a>

```python
def reset_content_language() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_expires` <a name="reset_expires" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetExpires"></a>

```python
def reset_expires() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_mfa` <a name="reset_mfa" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetMfa"></a>

```python
def reset_mfa() -> None
```

##### `reset_object_lock_legal_hold` <a name="reset_object_lock_legal_hold" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockLegalHold"></a>

```python
def reset_object_lock_legal_hold() -> None
```

##### `reset_object_lock_mode` <a name="reset_object_lock_mode" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockMode"></a>

```python
def reset_object_lock_mode() -> None
```

##### `reset_object_lock_retain_until_date` <a name="reset_object_lock_retain_until_date" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockRetainUntilDate"></a>

```python
def reset_object_lock_retain_until_date() -> None
```

##### `reset_request_payer` <a name="reset_request_payer" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetRequestPayer"></a>

```python
def reset_request_payer() -> None
```

##### `reset_server_side_encryption` <a name="reset_server_side_encryption" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryption"></a>

```python
def reset_server_side_encryption() -> None
```

##### `reset_server_side_encryption_context` <a name="reset_server_side_encryption_context" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionContext"></a>

```python
def reset_server_side_encryption_context() -> None
```

##### `reset_server_side_encryption_customer_algorithm` <a name="reset_server_side_encryption_customer_algorithm" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerAlgorithm"></a>

```python
def reset_server_side_encryption_customer_algorithm() -> None
```

##### `reset_server_side_encryption_customer_key` <a name="reset_server_side_encryption_customer_key" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKey"></a>

```python
def reset_server_side_encryption_customer_key() -> None
```

##### `reset_server_side_encryption_customer_key_md5` <a name="reset_server_side_encryption_customer_key_md5" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKeyMd5"></a>

```python
def reset_server_side_encryption_customer_key_md5() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_website_redirect` <a name="reset_website_redirect" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetWebsiteRedirect"></a>

```python
def reset_website_redirect() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_object

s3Object.S3Object.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_object

s3Object.S3Object.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_object

s3Object.S3Object.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_object

s3Object.S3Object.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3Object to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3Object that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3Object to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControlInput">cache_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDispositionInput">content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncodingInput">content_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguageInput">content_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.expiresInput">expires_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfaInput">mfa_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHoldInput">object_lock_legal_hold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockModeInput">object_lock_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDateInput">object_lock_retain_until_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayerInput">request_payer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContextInput">server_side_encryption_context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithmInput">server_side_encryption_customer_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyInput">server_side_encryption_customer_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5Input">server_side_encryption_customer_key_md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionInput">server_side_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirectInput">website_redirect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControl">cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguage">content_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.expires">expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfa">mfa</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHold">object_lock_legal_hold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockMode">object_lock_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDate">object_lock_retain_until_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayer">request_payer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryption">server_side_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContext">server_side_encryption_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithm">server_side_encryption_customer_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKey">server_side_encryption_customer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5">server_side_encryption_customer_key_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirect">website_redirect</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `cache_control_input`<sup>Optional</sup> <a name="cache_control_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControlInput"></a>

```python
cache_control_input: str
```

- *Type:* str

---

##### `content_disposition_input`<sup>Optional</sup> <a name="content_disposition_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDispositionInput"></a>

```python
content_disposition_input: str
```

- *Type:* str

---

##### `content_encoding_input`<sup>Optional</sup> <a name="content_encoding_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncodingInput"></a>

```python
content_encoding_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_language_input`<sup>Optional</sup> <a name="content_language_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguageInput"></a>

```python
content_language_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `expires_input`<sup>Optional</sup> <a name="expires_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.expiresInput"></a>

```python
expires_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mfa_input`<sup>Optional</sup> <a name="mfa_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfaInput"></a>

```python
mfa_input: str
```

- *Type:* str

---

##### `object_lock_legal_hold_input`<sup>Optional</sup> <a name="object_lock_legal_hold_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHoldInput"></a>

```python
object_lock_legal_hold_input: str
```

- *Type:* str

---

##### `object_lock_mode_input`<sup>Optional</sup> <a name="object_lock_mode_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockModeInput"></a>

```python
object_lock_mode_input: str
```

- *Type:* str

---

##### `object_lock_retain_until_date_input`<sup>Optional</sup> <a name="object_lock_retain_until_date_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDateInput"></a>

```python
object_lock_retain_until_date_input: str
```

- *Type:* str

---

##### `request_payer_input`<sup>Optional</sup> <a name="request_payer_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayerInput"></a>

```python
request_payer_input: str
```

- *Type:* str

---

##### `server_side_encryption_context_input`<sup>Optional</sup> <a name="server_side_encryption_context_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContextInput"></a>

```python
server_side_encryption_context_input: str
```

- *Type:* str

---

##### `server_side_encryption_customer_algorithm_input`<sup>Optional</sup> <a name="server_side_encryption_customer_algorithm_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithmInput"></a>

```python
server_side_encryption_customer_algorithm_input: str
```

- *Type:* str

---

##### `server_side_encryption_customer_key_input`<sup>Optional</sup> <a name="server_side_encryption_customer_key_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyInput"></a>

```python
server_side_encryption_customer_key_input: str
```

- *Type:* str

---

##### `server_side_encryption_customer_key_md5_input`<sup>Optional</sup> <a name="server_side_encryption_customer_key_md5_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5Input"></a>

```python
server_side_encryption_customer_key_md5_input: str
```

- *Type:* str

---

##### `server_side_encryption_input`<sup>Optional</sup> <a name="server_side_encryption_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionInput"></a>

```python
server_side_encryption_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `website_redirect_input`<sup>Optional</sup> <a name="website_redirect_input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirectInput"></a>

```python
website_redirect_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `cache_control`<sup>Required</sup> <a name="cache_control" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_language`<sup>Required</sup> <a name="content_language" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.expires"></a>

```python
expires: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mfa`<sup>Required</sup> <a name="mfa" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfa"></a>

```python
mfa: str
```

- *Type:* str

---

##### `object_lock_legal_hold`<sup>Required</sup> <a name="object_lock_legal_hold" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHold"></a>

```python
object_lock_legal_hold: str
```

- *Type:* str

---

##### `object_lock_mode`<sup>Required</sup> <a name="object_lock_mode" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockMode"></a>

```python
object_lock_mode: str
```

- *Type:* str

---

##### `object_lock_retain_until_date`<sup>Required</sup> <a name="object_lock_retain_until_date" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDate"></a>

```python
object_lock_retain_until_date: str
```

- *Type:* str

---

##### `request_payer`<sup>Required</sup> <a name="request_payer" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayer"></a>

```python
request_payer: str
```

- *Type:* str

---

##### `server_side_encryption`<sup>Required</sup> <a name="server_side_encryption" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryption"></a>

```python
server_side_encryption: str
```

- *Type:* str

---

##### `server_side_encryption_context`<sup>Required</sup> <a name="server_side_encryption_context" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContext"></a>

```python
server_side_encryption_context: str
```

- *Type:* str

---

##### `server_side_encryption_customer_algorithm`<sup>Required</sup> <a name="server_side_encryption_customer_algorithm" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithm"></a>

```python
server_side_encryption_customer_algorithm: str
```

- *Type:* str

---

##### `server_side_encryption_customer_key`<sup>Required</sup> <a name="server_side_encryption_customer_key" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKey"></a>

```python
server_side_encryption_customer_key: str
```

- *Type:* str

---

##### `server_side_encryption_customer_key_md5`<sup>Required</sup> <a name="server_side_encryption_customer_key_md5" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5"></a>

```python
server_side_encryption_customer_key_md5: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `website_redirect`<sup>Required</sup> <a name="website_redirect" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirect"></a>

```python
website_redirect: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectConfig <a name="S3ObjectConfig" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import s3_object

s3Object.S3ObjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  key: str,
  cache_control: str = None,
  content: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  expires: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  metadata: typing.Mapping[str] = None,
  mfa: str = None,
  object_lock_legal_hold: str = None,
  object_lock_mode: str = None,
  object_lock_retain_until_date: str = None,
  request_payer: str = None,
  server_side_encryption: str = None,
  server_side_encryption_context: str = None,
  server_side_encryption_customer_algorithm: str = None,
  server_side_encryption_customer_key: str = None,
  server_side_encryption_customer_key_md5: str = None,
  source: str = None,
  storage_class: str = None,
  tags: typing.Mapping[str] = None,
  website_redirect: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.bucket">bucket</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.key">key</a></code> | <code>str</code> | The key of the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.cacheControl">cache_control</a></code> | <code>str</code> | Can be used to specify caching behavior along the request/reply chain. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.content">content</a></code> | <code>str</code> | The utf-8 content of the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentDisposition">content_disposition</a></code> | <code>str</code> | Specifies presentational information for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentEncoding">content_encoding</a></code> | <code>str</code> | Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentLanguage">content_language</a></code> | <code>str</code> | The natural language or languages of the intended audience for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentType">content_type</a></code> | <code>str</code> | A standard MIME type describing the format of the contents. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.expires">expires</a></code> | <code>str</code> | The date and time at which the object is no longer cacheable. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to delete the object even if it has a governance-type Object Lock in place. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | A map of metadata to store with the object in IONOS Object Storage Object Storage. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.mfa">mfa</a></code> | <code>str</code> | The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockLegalHold">object_lock_legal_hold</a></code> | <code>str</code> | Specifies whether a legal hold will be applied to this object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockMode">object_lock_mode</a></code> | <code>str</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate">object_lock_retain_until_date</a></code> | <code>str</code> | The date and time when you want this object's Object Lock to expire. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.requestPayer">request_payer</a></code> | <code>str</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryption">server_side_encryption</a></code> | <code>str</code> | The server-side encryption algorithm used when storing this object in IONOS Object Storage Object Storage (AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionContext">server_side_encryption_context</a></code> | <code>str</code> | Specifies the IONOS Object Storage Object Storage Encryption Context to use for object encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerAlgorithm">server_side_encryption_customer_algorithm</a></code> | <code>str</code> | Specifies the algorithm to use to when encrypting the object (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKey">server_side_encryption_customer_key</a></code> | <code>str</code> | Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKeyMd5">server_side_encryption_customer_key_md5</a></code> | <code>str</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.source">source</a></code> | <code>str</code> | The path to the file to upload. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.storageClass">storage_class</a></code> | <code>str</code> | The storage class of the object. Valid value is 'STANDARD'. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tag-set for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.websiteRedirect">website_redirect</a></code> | <code>str</code> | If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#bucket S3Object#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#key S3Object#key}

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

Can be used to specify caching behavior along the request/reply chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#cache_control S3Object#cache_control}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.content"></a>

```python
content: str
```

- *Type:* str

The utf-8 content of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content S3Object#content}

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

Specifies presentational information for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content_disposition S3Object#content_disposition}

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content_encoding S3Object#content_encoding}

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

The natural language or languages of the intended audience for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content_language S3Object#content_language}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

A standard MIME type describing the format of the contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content_type S3Object#content_type}

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.expires"></a>

```python
expires: str
```

- *Type:* str

The date and time at which the object is no longer cacheable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#expires S3Object#expires}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to delete the object even if it has a governance-type Object Lock in place.

You must explicitly pass a value of true for this parameter to delete the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#force_destroy S3Object#force_destroy}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of metadata to store with the object in IONOS Object Storage Object Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#metadata S3Object#metadata}

---

##### `mfa`<sup>Optional</sup> <a name="mfa" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.mfa"></a>

```python
mfa: str
```

- *Type:* str

The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.

Required to permanently delete a versioned object if versioning is configured with MFA Delete enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#mfa S3Object#mfa}

---

##### `object_lock_legal_hold`<sup>Optional</sup> <a name="object_lock_legal_hold" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockLegalHold"></a>

```python
object_lock_legal_hold: str
```

- *Type:* str

Specifies whether a legal hold will be applied to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#object_lock_legal_hold S3Object#object_lock_legal_hold}

---

##### `object_lock_mode`<sup>Optional</sup> <a name="object_lock_mode" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockMode"></a>

```python
object_lock_mode: str
```

- *Type:* str

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}

---

##### `object_lock_retain_until_date`<sup>Optional</sup> <a name="object_lock_retain_until_date" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate"></a>

```python
object_lock_retain_until_date: str
```

- *Type:* str

The date and time when you want this object's Object Lock to expire.

Must be formatted as a timestamp parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}

---

##### `request_payer`<sup>Optional</sup> <a name="request_payer" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.requestPayer"></a>

```python
request_payer: str
```

- *Type:* str

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#request_payer S3Object#request_payer}

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryption"></a>

```python
server_side_encryption: str
```

- *Type:* str

The server-side encryption algorithm used when storing this object in IONOS Object Storage Object Storage (AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}

---

##### `server_side_encryption_context`<sup>Optional</sup> <a name="server_side_encryption_context" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionContext"></a>

```python
server_side_encryption_context: str
```

- *Type:* str

Specifies the IONOS Object Storage Object Storage Encryption Context to use for object encryption.

The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption_context S3Object#server_side_encryption_context}

---

##### `server_side_encryption_customer_algorithm`<sup>Optional</sup> <a name="server_side_encryption_customer_algorithm" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerAlgorithm"></a>

```python
server_side_encryption_customer_algorithm: str
```

- *Type:* str

Specifies the algorithm to use to when encrypting the object (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption_customer_algorithm S3Object#server_side_encryption_customer_algorithm}

---

##### `server_side_encryption_customer_key`<sup>Optional</sup> <a name="server_side_encryption_customer_key" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKey"></a>

```python
server_side_encryption_customer_key: str
```

- *Type:* str

Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption_customer_key S3Object#server_side_encryption_customer_key}

---

##### `server_side_encryption_customer_key_md5`<sup>Optional</sup> <a name="server_side_encryption_customer_key_md5" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKeyMd5"></a>

```python
server_side_encryption_customer_key_md5: str
```

- *Type:* str

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption_customer_key_md5 S3Object#server_side_encryption_customer_key_md5}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.source"></a>

```python
source: str
```

- *Type:* str

The path to the file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#source S3Object#source}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

The storage class of the object. Valid value is 'STANDARD'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#storage_class S3Object#storage_class}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tag-set for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#tags S3Object#tags}

---

##### `website_redirect`<sup>Optional</sup> <a name="website_redirect" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.websiteRedirect"></a>

```python
website_redirect: str
```

- *Type:* str

If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL.

IONOS Object Storage Object Storage stores the value of this header in the object metadata

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#website_redirect S3Object#website_redirect}

---



