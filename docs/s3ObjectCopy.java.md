# `s3ObjectCopy` Submodule <a name="`s3ObjectCopy` Submodule" id="@cdktf/provider-ionoscloud.s3ObjectCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectCopy <a name="S3ObjectCopy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy ionoscloud_s3_object_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_object_copy.S3ObjectCopy;

S3ObjectCopy.Builder.create(Construct scope, java.lang.String id)
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
    .source(java.lang.String)
//  .cacheControl(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .copyIfMatch(java.lang.String)
//  .copyIfModifiedSince(java.lang.String)
//  .copyIfNoneMatch(java.lang.String)
//  .copyIfUnmodifiedSince(java.lang.String)
//  .expires(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .metadataDirective(java.lang.String)
//  .objectLockLegalHold(java.lang.String)
//  .objectLockMode(java.lang.String)
//  .objectLockRetainUntilDate(java.lang.String)
//  .serverSideEncryption(java.lang.String)
//  .serverSideEncryptionCustomerAlgorithm(java.lang.String)
//  .serverSideEncryptionCustomerKey(java.lang.String)
//  .serverSideEncryptionCustomerKeyMd5(java.lang.String)
//  .sourceCustomerAlgorithm(java.lang.String)
//  .sourceCustomerKey(java.lang.String)
//  .sourceCustomerKeyMd5(java.lang.String)
//  .storageClass(java.lang.String)
//  .taggingDirective(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .websiteRedirect(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | The key of the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | The key of the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Can be used to specify caching behavior along the request/reply chain. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Specifies presentational information for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | The natural language or languages of the intended audience for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | A standard MIME type describing the format of the contents. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfMatch">copyIfMatch</a></code> | <code>java.lang.String</code> | Copies the object if its entity tag (ETag) matches the specified tag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfModifiedSince">copyIfModifiedSince</a></code> | <code>java.lang.String</code> | Copies the object if it has been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfNoneMatch">copyIfNoneMatch</a></code> | <code>java.lang.String</code> | Copies the object if its entity tag (ETag) is different than the specified ETag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfUnmodifiedSince">copyIfUnmodifiedSince</a></code> | <code>java.lang.String</code> | Copies the object if it hasn't been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expires">expires</a></code> | <code>java.lang.String</code> | The date and time at which the object copy is no longer cacheable. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of metadata to store with the object copy in IONOS Object Storage Object Copy Storage. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadataDirective">metadataDirective</a></code> | <code>java.lang.String</code> | Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockLegalHold">objectLockLegalHold</a></code> | <code>java.lang.String</code> | Specifies whether a legal hold will be applied to this object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockMode">objectLockMode</a></code> | <code>java.lang.String</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>java.lang.String</code> | The date and time when you want this object copy's Object Copy Lock to expire. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | The server-side encryption algorithm used when storing this object copy in IONOS Object Storage Object Copy Storage (AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryptionCustomerAlgorithm">serverSideEncryptionCustomerAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the algorithm to use to when encrypting the object copy (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryptionCustomerKey">serverSideEncryptionCustomerKey</a></code> | <code>java.lang.String</code> | Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryptionCustomerKeyMd5">serverSideEncryptionCustomerKeyMd5</a></code> | <code>java.lang.String</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerAlgorithm">sourceCustomerAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the algorithm to use to when decrypting the source object (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKey">sourceCustomerKey</a></code> | <code>java.lang.String</code> | Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKeyMd5">sourceCustomerKeyMd5</a></code> | <code>java.lang.String</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The storage class of the object copy. Valid value is 'STANDARD'. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.taggingDirective">taggingDirective</a></code> | <code>java.lang.String</code> | Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tag-set for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#bucket S3ObjectCopy#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.key"></a>

- *Type:* java.lang.String

The key of the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#key S3ObjectCopy#key}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.source"></a>

- *Type:* java.lang.String

The key of the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#source S3ObjectCopy#source}

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.cacheControl"></a>

- *Type:* java.lang.String

Can be used to specify caching behavior along the request/reply chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#cache_control S3ObjectCopy#cache_control}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentDisposition"></a>

- *Type:* java.lang.String

Specifies presentational information for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentEncoding"></a>

- *Type:* java.lang.String

Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentLanguage"></a>

- *Type:* java.lang.String

The natural language or languages of the intended audience for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#content_language S3ObjectCopy#content_language}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

A standard MIME type describing the format of the contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#content_type S3ObjectCopy#content_type}

---

##### `copyIfMatch`<sup>Optional</sup> <a name="copyIfMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfMatch"></a>

- *Type:* java.lang.String

Copies the object if its entity tag (ETag) matches the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}

---

##### `copyIfModifiedSince`<sup>Optional</sup> <a name="copyIfModifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfModifiedSince"></a>

- *Type:* java.lang.String

Copies the object if it has been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}

---

##### `copyIfNoneMatch`<sup>Optional</sup> <a name="copyIfNoneMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfNoneMatch"></a>

- *Type:* java.lang.String

Copies the object if its entity tag (ETag) is different than the specified ETag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}

---

##### `copyIfUnmodifiedSince`<sup>Optional</sup> <a name="copyIfUnmodifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfUnmodifiedSince"></a>

- *Type:* java.lang.String

Copies the object if it hasn't been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expires"></a>

- *Type:* java.lang.String

The date and time at which the object copy is no longer cacheable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#expires S3ObjectCopy#expires}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place.

You must explicitly pass a value of true for this parameter to delete the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of metadata to store with the object copy in IONOS Object Storage Object Copy Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#metadata S3ObjectCopy#metadata}

---

##### `metadataDirective`<sup>Optional</sup> <a name="metadataDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadataDirective"></a>

- *Type:* java.lang.String

Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}

---

##### `objectLockLegalHold`<sup>Optional</sup> <a name="objectLockLegalHold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockLegalHold"></a>

- *Type:* java.lang.String

Specifies whether a legal hold will be applied to this object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#object_lock_legal_hold S3ObjectCopy#object_lock_legal_hold}

---

##### `objectLockMode`<sup>Optional</sup> <a name="objectLockMode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockMode"></a>

- *Type:* java.lang.String

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockRetainUntilDate"></a>

- *Type:* java.lang.String

The date and time when you want this object copy's Object Copy Lock to expire.

Must be formatted as a timestamp parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryption"></a>

- *Type:* java.lang.String

The server-side encryption algorithm used when storing this object copy in IONOS Object Storage Object Copy Storage (AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}

---

##### `serverSideEncryptionCustomerAlgorithm`<sup>Optional</sup> <a name="serverSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryptionCustomerAlgorithm"></a>

- *Type:* java.lang.String

Specifies the algorithm to use to when encrypting the object copy (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#server_side_encryption_customer_algorithm S3ObjectCopy#server_side_encryption_customer_algorithm}

---

##### `serverSideEncryptionCustomerKey`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryptionCustomerKey"></a>

- *Type:* java.lang.String

Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#server_side_encryption_customer_key S3ObjectCopy#server_side_encryption_customer_key}

---

##### `serverSideEncryptionCustomerKeyMd5`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryptionCustomerKeyMd5"></a>

- *Type:* java.lang.String

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#server_side_encryption_customer_key_md5 S3ObjectCopy#server_side_encryption_customer_key_md5}

---

##### `sourceCustomerAlgorithm`<sup>Optional</sup> <a name="sourceCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerAlgorithm"></a>

- *Type:* java.lang.String

Specifies the algorithm to use to when decrypting the source object (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}

---

##### `sourceCustomerKey`<sup>Optional</sup> <a name="sourceCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKey"></a>

- *Type:* java.lang.String

Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}

---

##### `sourceCustomerKeyMd5`<sup>Optional</sup> <a name="sourceCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKeyMd5"></a>

- *Type:* java.lang.String

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.storageClass"></a>

- *Type:* java.lang.String

The storage class of the object copy. Valid value is 'STANDARD'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#storage_class S3ObjectCopy#storage_class}

---

##### `taggingDirective`<sup>Optional</sup> <a name="taggingDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.taggingDirective"></a>

- *Type:* java.lang.String

Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tag-set for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#tags S3ObjectCopy#tags}

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.websiteRedirect"></a>

- *Type:* java.lang.String

If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL.

IONOS Object Storage Object Copy Storage stores the value of this header in the object copy metadata

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch">resetCopyIfMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince">resetCopyIfModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch">resetCopyIfNoneMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince">resetCopyIfUnmodifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetExpires">resetExpires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective">resetMetadataDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHold">resetObjectLockLegalHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode">resetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate">resetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerAlgorithm">resetServerSideEncryptionCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKey">resetServerSideEncryptionCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKeyMd5">resetServerSideEncryptionCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm">resetSourceCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey">resetSourceCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5">resetSourceCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective">resetTaggingDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect">resetWebsiteRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCacheControl"></a>

```java
public void resetCacheControl()
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentDisposition"></a>

```java
public void resetContentDisposition()
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentEncoding"></a>

```java
public void resetContentEncoding()
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentLanguage"></a>

```java
public void resetContentLanguage()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetCopyIfMatch` <a name="resetCopyIfMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch"></a>

```java
public void resetCopyIfMatch()
```

##### `resetCopyIfModifiedSince` <a name="resetCopyIfModifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince"></a>

```java
public void resetCopyIfModifiedSince()
```

##### `resetCopyIfNoneMatch` <a name="resetCopyIfNoneMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch"></a>

```java
public void resetCopyIfNoneMatch()
```

##### `resetCopyIfUnmodifiedSince` <a name="resetCopyIfUnmodifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince"></a>

```java
public void resetCopyIfUnmodifiedSince()
```

##### `resetExpires` <a name="resetExpires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetExpires"></a>

```java
public void resetExpires()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMetadataDirective` <a name="resetMetadataDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective"></a>

```java
public void resetMetadataDirective()
```

##### `resetObjectLockLegalHold` <a name="resetObjectLockLegalHold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHold"></a>

```java
public void resetObjectLockLegalHold()
```

##### `resetObjectLockMode` <a name="resetObjectLockMode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode"></a>

```java
public void resetObjectLockMode()
```

##### `resetObjectLockRetainUntilDate` <a name="resetObjectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate"></a>

```java
public void resetObjectLockRetainUntilDate()
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption"></a>

```java
public void resetServerSideEncryption()
```

##### `resetServerSideEncryptionCustomerAlgorithm` <a name="resetServerSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerAlgorithm"></a>

```java
public void resetServerSideEncryptionCustomerAlgorithm()
```

##### `resetServerSideEncryptionCustomerKey` <a name="resetServerSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKey"></a>

```java
public void resetServerSideEncryptionCustomerKey()
```

##### `resetServerSideEncryptionCustomerKeyMd5` <a name="resetServerSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKeyMd5"></a>

```java
public void resetServerSideEncryptionCustomerKeyMd5()
```

##### `resetSourceCustomerAlgorithm` <a name="resetSourceCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm"></a>

```java
public void resetSourceCustomerAlgorithm()
```

##### `resetSourceCustomerKey` <a name="resetSourceCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey"></a>

```java
public void resetSourceCustomerKey()
```

##### `resetSourceCustomerKeyMd5` <a name="resetSourceCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5"></a>

```java
public void resetSourceCustomerKeyMd5()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetStorageClass"></a>

```java
public void resetStorageClass()
```

##### `resetTaggingDirective` <a name="resetTaggingDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective"></a>

```java
public void resetTaggingDirective()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTags"></a>

```java
public void resetTags()
```

##### `resetWebsiteRedirect` <a name="resetWebsiteRedirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect"></a>

```java
public void resetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_object_copy.S3ObjectCopy;

S3ObjectCopy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_object_copy.S3ObjectCopy;

S3ObjectCopy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_object_copy.S3ObjectCopy;

S3ObjectCopy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_object_copy.S3ObjectCopy;

S3ObjectCopy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3ObjectCopy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3ObjectCopy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3ObjectCopy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the S3ObjectCopy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput">cacheControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput">contentDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput">contentEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput">contentLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput">copyIfMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput">copyIfModifiedSinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput">copyIfNoneMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput">copyIfUnmodifiedSinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expiresInput">expiresInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput">metadataDirectiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldInput">objectLockLegalHoldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput">objectLockModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput">objectLockRetainUntilDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithmInput">serverSideEncryptionCustomerAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyInput">serverSideEncryptionCustomerKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5Input">serverSideEncryptionCustomerKeyMd5Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput">sourceCustomerAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput">sourceCustomerKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input">sourceCustomerKeyMd5Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput">taggingDirectiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput">websiteRedirectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch">copyIfMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince">copyIfModifiedSince</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch">copyIfNoneMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince">copyIfUnmodifiedSince</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expires">expires</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirective">metadataDirective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHold">objectLockLegalHold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockMode">objectLockMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithm">serverSideEncryptionCustomerAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKey">serverSideEncryptionCustomerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5">serverSideEncryptionCustomerKeyMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm">sourceCustomerAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey">sourceCustomerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5">sourceCustomerKeyMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirective">taggingDirective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput"></a>

```java
public java.lang.String getCacheControlInput();
```

- *Type:* java.lang.String

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput"></a>

```java
public java.lang.String getContentDispositionInput();
```

- *Type:* java.lang.String

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput"></a>

```java
public java.lang.String getContentEncodingInput();
```

- *Type:* java.lang.String

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput"></a>

```java
public java.lang.String getContentLanguageInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `copyIfMatchInput`<sup>Optional</sup> <a name="copyIfMatchInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput"></a>

```java
public java.lang.String getCopyIfMatchInput();
```

- *Type:* java.lang.String

---

##### `copyIfModifiedSinceInput`<sup>Optional</sup> <a name="copyIfModifiedSinceInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput"></a>

```java
public java.lang.String getCopyIfModifiedSinceInput();
```

- *Type:* java.lang.String

---

##### `copyIfNoneMatchInput`<sup>Optional</sup> <a name="copyIfNoneMatchInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput"></a>

```java
public java.lang.String getCopyIfNoneMatchInput();
```

- *Type:* java.lang.String

---

##### `copyIfUnmodifiedSinceInput`<sup>Optional</sup> <a name="copyIfUnmodifiedSinceInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput"></a>

```java
public java.lang.String getCopyIfUnmodifiedSinceInput();
```

- *Type:* java.lang.String

---

##### `expiresInput`<sup>Optional</sup> <a name="expiresInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expiresInput"></a>

```java
public java.lang.String getExpiresInput();
```

- *Type:* java.lang.String

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `metadataDirectiveInput`<sup>Optional</sup> <a name="metadataDirectiveInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput"></a>

```java
public java.lang.String getMetadataDirectiveInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `objectLockLegalHoldInput`<sup>Optional</sup> <a name="objectLockLegalHoldInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldInput"></a>

```java
public java.lang.String getObjectLockLegalHoldInput();
```

- *Type:* java.lang.String

---

##### `objectLockModeInput`<sup>Optional</sup> <a name="objectLockModeInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput"></a>

```java
public java.lang.String getObjectLockModeInput();
```

- *Type:* java.lang.String

---

##### `objectLockRetainUntilDateInput`<sup>Optional</sup> <a name="objectLockRetainUntilDateInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput"></a>

```java
public java.lang.String getObjectLockRetainUntilDateInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionCustomerAlgorithmInput`<sup>Optional</sup> <a name="serverSideEncryptionCustomerAlgorithmInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithmInput"></a>

```java
public java.lang.String getServerSideEncryptionCustomerAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionCustomerKeyInput`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyInput"></a>

```java
public java.lang.String getServerSideEncryptionCustomerKeyInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionCustomerKeyMd5Input`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyMd5Input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5Input"></a>

```java
public java.lang.String getServerSideEncryptionCustomerKeyMd5Input();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput"></a>

```java
public java.lang.String getServerSideEncryptionInput();
```

- *Type:* java.lang.String

---

##### `sourceCustomerAlgorithmInput`<sup>Optional</sup> <a name="sourceCustomerAlgorithmInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput"></a>

```java
public java.lang.String getSourceCustomerAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `sourceCustomerKeyInput`<sup>Optional</sup> <a name="sourceCustomerKeyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput"></a>

```java
public java.lang.String getSourceCustomerKeyInput();
```

- *Type:* java.lang.String

---

##### `sourceCustomerKeyMd5Input`<sup>Optional</sup> <a name="sourceCustomerKeyMd5Input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input"></a>

```java
public java.lang.String getSourceCustomerKeyMd5Input();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `taggingDirectiveInput`<sup>Optional</sup> <a name="taggingDirectiveInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput"></a>

```java
public java.lang.String getTaggingDirectiveInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `websiteRedirectInput`<sup>Optional</sup> <a name="websiteRedirectInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput"></a>

```java
public java.lang.String getWebsiteRedirectInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `copyIfMatch`<sup>Required</sup> <a name="copyIfMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch"></a>

```java
public java.lang.String getCopyIfMatch();
```

- *Type:* java.lang.String

---

##### `copyIfModifiedSince`<sup>Required</sup> <a name="copyIfModifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince"></a>

```java
public java.lang.String getCopyIfModifiedSince();
```

- *Type:* java.lang.String

---

##### `copyIfNoneMatch`<sup>Required</sup> <a name="copyIfNoneMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch"></a>

```java
public java.lang.String getCopyIfNoneMatch();
```

- *Type:* java.lang.String

---

##### `copyIfUnmodifiedSince`<sup>Required</sup> <a name="copyIfUnmodifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince"></a>

```java
public java.lang.String getCopyIfUnmodifiedSince();
```

- *Type:* java.lang.String

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expires"></a>

```java
public java.lang.String getExpires();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadataDirective`<sup>Required</sup> <a name="metadataDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirective"></a>

```java
public java.lang.String getMetadataDirective();
```

- *Type:* java.lang.String

---

##### `objectLockLegalHold`<sup>Required</sup> <a name="objectLockLegalHold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHold"></a>

```java
public java.lang.String getObjectLockLegalHold();
```

- *Type:* java.lang.String

---

##### `objectLockMode`<sup>Required</sup> <a name="objectLockMode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockMode"></a>

```java
public java.lang.String getObjectLockMode();
```

- *Type:* java.lang.String

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate"></a>

```java
public java.lang.String getObjectLockRetainUntilDate();
```

- *Type:* java.lang.String

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption"></a>

```java
public java.lang.String getServerSideEncryption();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionCustomerAlgorithm`<sup>Required</sup> <a name="serverSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithm"></a>

```java
public java.lang.String getServerSideEncryptionCustomerAlgorithm();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionCustomerKey`<sup>Required</sup> <a name="serverSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKey"></a>

```java
public java.lang.String getServerSideEncryptionCustomerKey();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionCustomerKeyMd5`<sup>Required</sup> <a name="serverSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5"></a>

```java
public java.lang.String getServerSideEncryptionCustomerKeyMd5();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceCustomerAlgorithm`<sup>Required</sup> <a name="sourceCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm"></a>

```java
public java.lang.String getSourceCustomerAlgorithm();
```

- *Type:* java.lang.String

---

##### `sourceCustomerKey`<sup>Required</sup> <a name="sourceCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey"></a>

```java
public java.lang.String getSourceCustomerKey();
```

- *Type:* java.lang.String

---

##### `sourceCustomerKeyMd5`<sup>Required</sup> <a name="sourceCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5"></a>

```java
public java.lang.String getSourceCustomerKeyMd5();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `taggingDirective`<sup>Required</sup> <a name="taggingDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirective"></a>

```java
public java.lang.String getTaggingDirective();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `websiteRedirect`<sup>Required</sup> <a name="websiteRedirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect"></a>

```java
public java.lang.String getWebsiteRedirect();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectCopyConfig <a name="S3ObjectCopyConfig" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_object_copy.S3ObjectCopyConfig;

S3ObjectCopyConfig.builder()
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
    .source(java.lang.String)
//  .cacheControl(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .copyIfMatch(java.lang.String)
//  .copyIfModifiedSince(java.lang.String)
//  .copyIfNoneMatch(java.lang.String)
//  .copyIfUnmodifiedSince(java.lang.String)
//  .expires(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .metadataDirective(java.lang.String)
//  .objectLockLegalHold(java.lang.String)
//  .objectLockMode(java.lang.String)
//  .objectLockRetainUntilDate(java.lang.String)
//  .serverSideEncryption(java.lang.String)
//  .serverSideEncryptionCustomerAlgorithm(java.lang.String)
//  .serverSideEncryptionCustomerKey(java.lang.String)
//  .serverSideEncryptionCustomerKeyMd5(java.lang.String)
//  .sourceCustomerAlgorithm(java.lang.String)
//  .sourceCustomerKey(java.lang.String)
//  .sourceCustomerKeyMd5(java.lang.String)
//  .storageClass(java.lang.String)
//  .taggingDirective(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .websiteRedirect(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.key">key</a></code> | <code>java.lang.String</code> | The key of the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.source">source</a></code> | <code>java.lang.String</code> | The key of the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Can be used to specify caching behavior along the request/reply chain. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Specifies presentational information for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | The natural language or languages of the intended audience for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | A standard MIME type describing the format of the contents. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch">copyIfMatch</a></code> | <code>java.lang.String</code> | Copies the object if its entity tag (ETag) matches the specified tag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince">copyIfModifiedSince</a></code> | <code>java.lang.String</code> | Copies the object if it has been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch">copyIfNoneMatch</a></code> | <code>java.lang.String</code> | Copies the object if its entity tag (ETag) is different than the specified ETag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince">copyIfUnmodifiedSince</a></code> | <code>java.lang.String</code> | Copies the object if it hasn't been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.expires">expires</a></code> | <code>java.lang.String</code> | The date and time at which the object copy is no longer cacheable. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of metadata to store with the object copy in IONOS Object Storage Object Copy Storage. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective">metadataDirective</a></code> | <code>java.lang.String</code> | Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHold">objectLockLegalHold</a></code> | <code>java.lang.String</code> | Specifies whether a legal hold will be applied to this object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode">objectLockMode</a></code> | <code>java.lang.String</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>java.lang.String</code> | The date and time when you want this object copy's Object Copy Lock to expire. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | The server-side encryption algorithm used when storing this object copy in IONOS Object Storage Object Copy Storage (AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerAlgorithm">serverSideEncryptionCustomerAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the algorithm to use to when encrypting the object copy (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKey">serverSideEncryptionCustomerKey</a></code> | <code>java.lang.String</code> | Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKeyMd5">serverSideEncryptionCustomerKeyMd5</a></code> | <code>java.lang.String</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm">sourceCustomerAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the algorithm to use to when decrypting the source object (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey">sourceCustomerKey</a></code> | <code>java.lang.String</code> | Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5">sourceCustomerKeyMd5</a></code> | <code>java.lang.String</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The storage class of the object copy. Valid value is 'STANDARD'. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective">taggingDirective</a></code> | <code>java.lang.String</code> | Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tag-set for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#bucket S3ObjectCopy#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#key S3ObjectCopy#key}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The key of the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#source S3ObjectCopy#source}

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

Can be used to specify caching behavior along the request/reply chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#cache_control S3ObjectCopy#cache_control}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

Specifies presentational information for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

The natural language or languages of the intended audience for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#content_language S3ObjectCopy#content_language}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

A standard MIME type describing the format of the contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#content_type S3ObjectCopy#content_type}

---

##### `copyIfMatch`<sup>Optional</sup> <a name="copyIfMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch"></a>

```java
public java.lang.String getCopyIfMatch();
```

- *Type:* java.lang.String

Copies the object if its entity tag (ETag) matches the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}

---

##### `copyIfModifiedSince`<sup>Optional</sup> <a name="copyIfModifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince"></a>

```java
public java.lang.String getCopyIfModifiedSince();
```

- *Type:* java.lang.String

Copies the object if it has been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}

---

##### `copyIfNoneMatch`<sup>Optional</sup> <a name="copyIfNoneMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch"></a>

```java
public java.lang.String getCopyIfNoneMatch();
```

- *Type:* java.lang.String

Copies the object if its entity tag (ETag) is different than the specified ETag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}

---

##### `copyIfUnmodifiedSince`<sup>Optional</sup> <a name="copyIfUnmodifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince"></a>

```java
public java.lang.String getCopyIfUnmodifiedSince();
```

- *Type:* java.lang.String

Copies the object if it hasn't been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.expires"></a>

```java
public java.lang.String getExpires();
```

- *Type:* java.lang.String

The date and time at which the object copy is no longer cacheable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#expires S3ObjectCopy#expires}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place.

You must explicitly pass a value of true for this parameter to delete the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of metadata to store with the object copy in IONOS Object Storage Object Copy Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#metadata S3ObjectCopy#metadata}

---

##### `metadataDirective`<sup>Optional</sup> <a name="metadataDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective"></a>

```java
public java.lang.String getMetadataDirective();
```

- *Type:* java.lang.String

Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}

---

##### `objectLockLegalHold`<sup>Optional</sup> <a name="objectLockLegalHold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHold"></a>

```java
public java.lang.String getObjectLockLegalHold();
```

- *Type:* java.lang.String

Specifies whether a legal hold will be applied to this object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#object_lock_legal_hold S3ObjectCopy#object_lock_legal_hold}

---

##### `objectLockMode`<sup>Optional</sup> <a name="objectLockMode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode"></a>

```java
public java.lang.String getObjectLockMode();
```

- *Type:* java.lang.String

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate"></a>

```java
public java.lang.String getObjectLockRetainUntilDate();
```

- *Type:* java.lang.String

The date and time when you want this object copy's Object Copy Lock to expire.

Must be formatted as a timestamp parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption"></a>

```java
public java.lang.String getServerSideEncryption();
```

- *Type:* java.lang.String

The server-side encryption algorithm used when storing this object copy in IONOS Object Storage Object Copy Storage (AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}

---

##### `serverSideEncryptionCustomerAlgorithm`<sup>Optional</sup> <a name="serverSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerAlgorithm"></a>

```java
public java.lang.String getServerSideEncryptionCustomerAlgorithm();
```

- *Type:* java.lang.String

Specifies the algorithm to use to when encrypting the object copy (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#server_side_encryption_customer_algorithm S3ObjectCopy#server_side_encryption_customer_algorithm}

---

##### `serverSideEncryptionCustomerKey`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKey"></a>

```java
public java.lang.String getServerSideEncryptionCustomerKey();
```

- *Type:* java.lang.String

Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#server_side_encryption_customer_key S3ObjectCopy#server_side_encryption_customer_key}

---

##### `serverSideEncryptionCustomerKeyMd5`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKeyMd5"></a>

```java
public java.lang.String getServerSideEncryptionCustomerKeyMd5();
```

- *Type:* java.lang.String

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#server_side_encryption_customer_key_md5 S3ObjectCopy#server_side_encryption_customer_key_md5}

---

##### `sourceCustomerAlgorithm`<sup>Optional</sup> <a name="sourceCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm"></a>

```java
public java.lang.String getSourceCustomerAlgorithm();
```

- *Type:* java.lang.String

Specifies the algorithm to use to when decrypting the source object (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}

---

##### `sourceCustomerKey`<sup>Optional</sup> <a name="sourceCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey"></a>

```java
public java.lang.String getSourceCustomerKey();
```

- *Type:* java.lang.String

Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}

---

##### `sourceCustomerKeyMd5`<sup>Optional</sup> <a name="sourceCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5"></a>

```java
public java.lang.String getSourceCustomerKeyMd5();
```

- *Type:* java.lang.String

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

The storage class of the object copy. Valid value is 'STANDARD'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#storage_class S3ObjectCopy#storage_class}

---

##### `taggingDirective`<sup>Optional</sup> <a name="taggingDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective"></a>

```java
public java.lang.String getTaggingDirective();
```

- *Type:* java.lang.String

Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tag-set for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#tags S3ObjectCopy#tags}

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect"></a>

```java
public java.lang.String getWebsiteRedirect();
```

- *Type:* java.lang.String

If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL.

IONOS Object Storage Object Copy Storage stores the value of this header in the object copy metadata

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}

---



