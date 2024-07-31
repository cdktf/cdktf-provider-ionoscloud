# `dataIonoscloudS3BucketPublicAccessBlock` Submodule <a name="`dataIonoscloudS3BucketPublicAccessBlock` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudS3BucketPublicAccessBlock <a name="DataIonoscloudS3BucketPublicAccessBlock" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block ionoscloud_s3_bucket_public_access_block}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_bucket_public_access_block.DataIonoscloudS3BucketPublicAccessBlock;

DataIonoscloudS3BucketPublicAccessBlock.Builder.create(Construct scope, java.lang.String id)
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
//  .blockPublicAcls(java.lang.Boolean)
//  .blockPublicAcls(IResolvable)
//  .blockPublicPolicy(java.lang.Boolean)
//  .blockPublicPolicy(IResolvable)
//  .ignorePublicAcls(java.lang.Boolean)
//  .ignorePublicAcls(IResolvable)
//  .restrictPublicBuckets(java.lang.Boolean)
//  .restrictPublicBuckets(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#bucket DataIonoscloudS3BucketPublicAccessBlock#bucket}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.blockPublicAcls">blockPublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_acls DataIonoscloudS3BucketPublicAccessBlock#block_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.blockPublicPolicy">blockPublicPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_policy DataIonoscloudS3BucketPublicAccessBlock#block_public_policy}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.ignorePublicAcls">ignorePublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#ignore_public_acls DataIonoscloudS3BucketPublicAccessBlock#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#restrict_public_buckets DataIonoscloudS3BucketPublicAccessBlock#restrict_public_buckets}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#bucket DataIonoscloudS3BucketPublicAccessBlock#bucket}.

---

##### `blockPublicAcls`<sup>Optional</sup> <a name="blockPublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.blockPublicAcls"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_acls DataIonoscloudS3BucketPublicAccessBlock#block_public_acls}.

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="blockPublicPolicy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.blockPublicPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_policy DataIonoscloudS3BucketPublicAccessBlock#block_public_policy}.

---

##### `ignorePublicAcls`<sup>Optional</sup> <a name="ignorePublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.ignorePublicAcls"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#ignore_public_acls DataIonoscloudS3BucketPublicAccessBlock#ignore_public_acls}.

---

##### `restrictPublicBuckets`<sup>Optional</sup> <a name="restrictPublicBuckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.restrictPublicBuckets"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#restrict_public_buckets DataIonoscloudS3BucketPublicAccessBlock#restrict_public_buckets}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicAcls">resetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicPolicy">resetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetIgnorePublicAcls">resetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetRestrictPublicBuckets">resetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBlockPublicAcls` <a name="resetBlockPublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicAcls"></a>

```java
public void resetBlockPublicAcls()
```

##### `resetBlockPublicPolicy` <a name="resetBlockPublicPolicy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicPolicy"></a>

```java
public void resetBlockPublicPolicy()
```

##### `resetIgnorePublicAcls` <a name="resetIgnorePublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetIgnorePublicAcls"></a>

```java
public void resetIgnorePublicAcls()
```

##### `resetRestrictPublicBuckets` <a name="resetRestrictPublicBuckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetRestrictPublicBuckets"></a>

```java
public void resetRestrictPublicBuckets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudS3BucketPublicAccessBlock resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_bucket_public_access_block.DataIonoscloudS3BucketPublicAccessBlock;

DataIonoscloudS3BucketPublicAccessBlock.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_bucket_public_access_block.DataIonoscloudS3BucketPublicAccessBlock;

DataIonoscloudS3BucketPublicAccessBlock.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_bucket_public_access_block.DataIonoscloudS3BucketPublicAccessBlock;

DataIonoscloudS3BucketPublicAccessBlock.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_bucket_public_access_block.DataIonoscloudS3BucketPublicAccessBlock;

DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataIonoscloudS3BucketPublicAccessBlock resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataIonoscloudS3BucketPublicAccessBlock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataIonoscloudS3BucketPublicAccessBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudS3BucketPublicAccessBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAclsInput">blockPublicAclsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicyInput">blockPublicPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAclsInput">ignorePublicAclsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBucketsInput">restrictPublicBucketsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAcls">blockPublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `blockPublicAclsInput`<sup>Optional</sup> <a name="blockPublicAclsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAclsInput"></a>

```java
public java.lang.Object getBlockPublicAclsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPublicPolicyInput`<sup>Optional</sup> <a name="blockPublicPolicyInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicyInput"></a>

```java
public java.lang.Object getBlockPublicPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `ignorePublicAclsInput`<sup>Optional</sup> <a name="ignorePublicAclsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAclsInput"></a>

```java
public java.lang.Object getIgnorePublicAclsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restrictPublicBucketsInput`<sup>Optional</sup> <a name="restrictPublicBucketsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBucketsInput"></a>

```java
public java.lang.Object getRestrictPublicBucketsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPublicAcls`<sup>Required</sup> <a name="blockPublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAcls"></a>

```java
public java.lang.Object getBlockPublicAcls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="blockPublicPolicy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicy"></a>

```java
public java.lang.Object getBlockPublicPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="ignorePublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAcls"></a>

```java
public java.lang.Object getIgnorePublicAcls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="restrictPublicBuckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBuckets"></a>

```java
public java.lang.Object getRestrictPublicBuckets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudS3BucketPublicAccessBlockConfig <a name="DataIonoscloudS3BucketPublicAccessBlockConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_bucket_public_access_block.DataIonoscloudS3BucketPublicAccessBlockConfig;

DataIonoscloudS3BucketPublicAccessBlockConfig.builder()
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
//  .blockPublicAcls(java.lang.Boolean)
//  .blockPublicAcls(IResolvable)
//  .blockPublicPolicy(java.lang.Boolean)
//  .blockPublicPolicy(IResolvable)
//  .ignorePublicAcls(java.lang.Boolean)
//  .ignorePublicAcls(IResolvable)
//  .restrictPublicBuckets(java.lang.Boolean)
//  .restrictPublicBuckets(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#bucket DataIonoscloudS3BucketPublicAccessBlock#bucket}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicAcls">blockPublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_acls DataIonoscloudS3BucketPublicAccessBlock#block_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_policy DataIonoscloudS3BucketPublicAccessBlock#block_public_policy}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#ignore_public_acls DataIonoscloudS3BucketPublicAccessBlock#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#restrict_public_buckets DataIonoscloudS3BucketPublicAccessBlock#restrict_public_buckets}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#bucket DataIonoscloudS3BucketPublicAccessBlock#bucket}.

---

##### `blockPublicAcls`<sup>Optional</sup> <a name="blockPublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicAcls"></a>

```java
public java.lang.Object getBlockPublicAcls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_acls DataIonoscloudS3BucketPublicAccessBlock#block_public_acls}.

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="blockPublicPolicy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicPolicy"></a>

```java
public java.lang.Object getBlockPublicPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#block_public_policy DataIonoscloudS3BucketPublicAccessBlock#block_public_policy}.

---

##### `ignorePublicAcls`<sup>Optional</sup> <a name="ignorePublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.ignorePublicAcls"></a>

```java
public java.lang.Object getIgnorePublicAcls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#ignore_public_acls DataIonoscloudS3BucketPublicAccessBlock#ignore_public_acls}.

---

##### `restrictPublicBuckets`<sup>Optional</sup> <a name="restrictPublicBuckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.restrictPublicBuckets"></a>

```java
public java.lang.Object getRestrictPublicBuckets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.19/docs/data-sources/s3_bucket_public_access_block#restrict_public_buckets DataIonoscloudS3BucketPublicAccessBlock#restrict_public_buckets}.

---



