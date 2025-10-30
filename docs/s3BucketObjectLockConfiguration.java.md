# `s3BucketObjectLockConfiguration` Submodule <a name="`s3BucketObjectLockConfiguration` Submodule" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketObjectLockConfiguration <a name="S3BucketObjectLockConfiguration" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration ionoscloud_s3_bucket_object_lock_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_object_lock_configuration.S3BucketObjectLockConfiguration;

S3BucketObjectLockConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucket(java.lang.String)
//  .objectLockEnabled(java.lang.String)
//  .rule(S3BucketObjectLockConfigurationRule)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.objectLockEnabled">objectLockEnabled</a></code> | <code>java.lang.String</code> | Specifies whether Object Lock is enabled for the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a></code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#bucket S3BucketObjectLockConfiguration#bucket}

---

##### `objectLockEnabled`<sup>Optional</sup> <a name="objectLockEnabled" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.objectLockEnabled"></a>

- *Type:* java.lang.String

Specifies whether Object Lock is enabled for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#object_lock_enabled S3BucketObjectLockConfiguration#object_lock_enabled}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#rule S3BucketObjectLockConfiguration#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.resetObjectLockEnabled">resetObjectLockEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.putRule"></a>

```java
public void putRule(S3BucketObjectLockConfigurationRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

---

##### `resetObjectLockEnabled` <a name="resetObjectLockEnabled" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.resetObjectLockEnabled"></a>

```java
public void resetObjectLockEnabled()
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.resetRule"></a>

```java
public void resetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3BucketObjectLockConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_object_lock_configuration.S3BucketObjectLockConfiguration;

S3BucketObjectLockConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_object_lock_configuration.S3BucketObjectLockConfiguration;

S3BucketObjectLockConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_object_lock_configuration.S3BucketObjectLockConfiguration;

S3BucketObjectLockConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_object_lock_configuration.S3BucketObjectLockConfiguration;

S3BucketObjectLockConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3BucketObjectLockConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a S3BucketObjectLockConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3BucketObjectLockConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3BucketObjectLockConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the S3BucketObjectLockConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference">S3BucketObjectLockConfigurationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.objectLockEnabledInput">objectLockEnabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.objectLockEnabled">objectLockEnabled</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.rule"></a>

```java
public S3BucketObjectLockConfigurationRuleOutputReference getRule();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference">S3BucketObjectLockConfigurationRuleOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `objectLockEnabledInput`<sup>Optional</sup> <a name="objectLockEnabledInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.objectLockEnabledInput"></a>

```java
public java.lang.String getObjectLockEnabledInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.ruleInput"></a>

```java
public IResolvable|S3BucketObjectLockConfigurationRule getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `objectLockEnabled`<sup>Required</sup> <a name="objectLockEnabled" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.objectLockEnabled"></a>

```java
public java.lang.String getObjectLockEnabled();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketObjectLockConfigurationConfig <a name="S3BucketObjectLockConfigurationConfig" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_object_lock_configuration.S3BucketObjectLockConfigurationConfig;

S3BucketObjectLockConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucket(java.lang.String)
//  .objectLockEnabled(java.lang.String)
//  .rule(S3BucketObjectLockConfigurationRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.objectLockEnabled">objectLockEnabled</a></code> | <code>java.lang.String</code> | Specifies whether Object Lock is enabled for the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a></code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#bucket S3BucketObjectLockConfiguration#bucket}

---

##### `objectLockEnabled`<sup>Optional</sup> <a name="objectLockEnabled" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.objectLockEnabled"></a>

```java
public java.lang.String getObjectLockEnabled();
```

- *Type:* java.lang.String

Specifies whether Object Lock is enabled for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#object_lock_enabled S3BucketObjectLockConfiguration#object_lock_enabled}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.rule"></a>

```java
public S3BucketObjectLockConfigurationRule getRule();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#rule S3BucketObjectLockConfiguration#rule}

---

### S3BucketObjectLockConfigurationRule <a name="S3BucketObjectLockConfigurationRule" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_object_lock_configuration.S3BucketObjectLockConfigurationRule;

S3BucketObjectLockConfigurationRule.builder()
//  .defaultRetention(S3BucketObjectLockConfigurationRuleDefaultRetention)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule.property.defaultRetention">defaultRetention</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | default_retention block. |

---

##### `defaultRetention`<sup>Optional</sup> <a name="defaultRetention" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule.property.defaultRetention"></a>

```java
public S3BucketObjectLockConfigurationRuleDefaultRetention getDefaultRetention();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

default_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#default_retention S3BucketObjectLockConfiguration#default_retention}

---

### S3BucketObjectLockConfigurationRuleDefaultRetention <a name="S3BucketObjectLockConfigurationRuleDefaultRetention" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_object_lock_configuration.S3BucketObjectLockConfigurationRuleDefaultRetention;

S3BucketObjectLockConfigurationRuleDefaultRetention.builder()
//  .days(java.lang.Number)
//  .mode(java.lang.String)
//  .years(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.property.days">days</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#days S3BucketObjectLockConfiguration#days}. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#mode S3BucketObjectLockConfiguration#mode}. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.property.years">years</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#years S3BucketObjectLockConfiguration#years}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#days S3BucketObjectLockConfiguration#days}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#mode S3BucketObjectLockConfiguration#mode}.

---

##### `years`<sup>Optional</sup> <a name="years" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.property.years"></a>

```java
public java.lang.Number getYears();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.18/docs/resources/s3_bucket_object_lock_configuration#years S3BucketObjectLockConfiguration#years}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference <a name="S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_object_lock_configuration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference;

new S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetYears">resetYears</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetDays"></a>

```java
public void resetDays()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetYears` <a name="resetYears" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetYears"></a>

```java
public void resetYears()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.daysInput">daysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.yearsInput">yearsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years">years</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.daysInput"></a>

```java
public java.lang.Number getDaysInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `yearsInput`<sup>Optional</sup> <a name="yearsInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.yearsInput"></a>

```java
public java.lang.Number getYearsInput();
```

- *Type:* java.lang.Number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `years`<sup>Required</sup> <a name="years" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years"></a>

```java
public java.lang.Number getYears();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue"></a>

```java
public IResolvable|S3BucketObjectLockConfigurationRuleDefaultRetention getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

---


### S3BucketObjectLockConfigurationRuleOutputReference <a name="S3BucketObjectLockConfigurationRuleOutputReference" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_object_lock_configuration.S3BucketObjectLockConfigurationRuleOutputReference;

new S3BucketObjectLockConfigurationRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention">putDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.resetDefaultRetention">resetDefaultRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultRetention` <a name="putDefaultRetention" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention"></a>

```java
public void putDefaultRetention(S3BucketObjectLockConfigurationRuleDefaultRetention value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

---

##### `resetDefaultRetention` <a name="resetDefaultRetention" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.resetDefaultRetention"></a>

```java
public void resetDefaultRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention">defaultRetention</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference">S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetentionInput">defaultRetentionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultRetention`<sup>Required</sup> <a name="defaultRetention" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention"></a>

```java
public S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference getDefaultRetention();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference">S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference</a>

---

##### `defaultRetentionInput`<sup>Optional</sup> <a name="defaultRetentionInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetentionInput"></a>

```java
public IResolvable|S3BucketObjectLockConfigurationRuleDefaultRetention getDefaultRetentionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|S3BucketObjectLockConfigurationRule getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

---



