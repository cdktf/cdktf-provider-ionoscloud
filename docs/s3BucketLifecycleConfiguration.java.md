# `s3BucketLifecycleConfiguration` Submodule <a name="`s3BucketLifecycleConfiguration` Submodule" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketLifecycleConfiguration <a name="S3BucketLifecycleConfiguration" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration ionoscloud_s3_bucket_lifecycle_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfiguration;

S3BucketLifecycleConfiguration.Builder.create(Construct scope, java.lang.String id)
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
//  .rule(IResolvable)
//  .rule(java.util.List<S3BucketLifecycleConfigurationRule>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>></code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#bucket S3BucketLifecycleConfiguration#bucket}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.Initializer.parameter.rule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#rule S3BucketLifecycleConfiguration#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<S3BucketLifecycleConfigurationRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>>

---

##### `resetRule` <a name="resetRule" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.resetRule"></a>

```java
public void resetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3BucketLifecycleConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfiguration;

S3BucketLifecycleConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfiguration;

S3BucketLifecycleConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfiguration;

S3BucketLifecycleConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfiguration;

S3BucketLifecycleConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3BucketLifecycleConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a S3BucketLifecycleConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3BucketLifecycleConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3BucketLifecycleConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the S3BucketLifecycleConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList">S3BucketLifecycleConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.rule"></a>

```java
public S3BucketLifecycleConfigurationRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList">S3BucketLifecycleConfigurationRuleList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketLifecycleConfigurationConfig <a name="S3BucketLifecycleConfigurationConfig" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfigurationConfig;

S3BucketLifecycleConfigurationConfig.builder()
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
//  .rule(IResolvable)
//  .rule(java.util.List<S3BucketLifecycleConfigurationRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>></code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#bucket S3BucketLifecycleConfiguration#bucket}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationConfig.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#rule S3BucketLifecycleConfiguration#rule}

---

### S3BucketLifecycleConfigurationRule <a name="S3BucketLifecycleConfigurationRule" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfigurationRule;

S3BucketLifecycleConfigurationRule.builder()
    .status(java.lang.String)
//  .abortIncompleteMultipartUpload(S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload)
//  .expiration(S3BucketLifecycleConfigurationRuleExpiration)
//  .filter(S3BucketLifecycleConfigurationRuleFilter)
//  .id(java.lang.String)
//  .noncurrentVersionExpiration(S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.status">status</a></code> | <code>java.lang.String</code> | Whether the rule is currently being applied. Valid values: Enabled or Disabled. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.abortIncompleteMultipartUpload">abortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | abort_incomplete_multipart_upload block. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration">S3BucketLifecycleConfigurationRuleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter">S3BucketLifecycleConfigurationRuleFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the rule. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.noncurrentVersionExpiration">noncurrentVersionExpiration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration</a></code> | noncurrent_version_expiration block. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Object key prefix identifying one or more objects to which the rule applies. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Whether the rule is currently being applied. Valid values: Enabled or Disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#status S3BucketLifecycleConfiguration#status}

---

##### `abortIncompleteMultipartUpload`<sup>Optional</sup> <a name="abortIncompleteMultipartUpload" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.abortIncompleteMultipartUpload"></a>

```java
public S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload getAbortIncompleteMultipartUpload();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

abort_incomplete_multipart_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#abort_incomplete_multipart_upload S3BucketLifecycleConfiguration#abort_incomplete_multipart_upload}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.expiration"></a>

```java
public S3BucketLifecycleConfigurationRuleExpiration getExpiration();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration">S3BucketLifecycleConfigurationRuleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#expiration S3BucketLifecycleConfiguration#expiration}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.filter"></a>

```java
public S3BucketLifecycleConfigurationRuleFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter">S3BucketLifecycleConfigurationRuleFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#filter S3BucketLifecycleConfiguration#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#id S3BucketLifecycleConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `noncurrentVersionExpiration`<sup>Optional</sup> <a name="noncurrentVersionExpiration" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.noncurrentVersionExpiration"></a>

```java
public S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration getNoncurrentVersionExpiration();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration</a>

noncurrent_version_expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#noncurrent_version_expiration S3BucketLifecycleConfiguration#noncurrent_version_expiration}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Object key prefix identifying one or more objects to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}

---

### S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload <a name="S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload;

S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.builder()
//  .daysAfterInitiation(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.property.daysAfterInitiation">daysAfterInitiation</a></code> | <code>java.lang.Number</code> | Specifies the number of days after which IONOS Object Storage Object Storage aborts an incomplete multipart upload. |

---

##### `daysAfterInitiation`<sup>Optional</sup> <a name="daysAfterInitiation" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

```java
public java.lang.Number getDaysAfterInitiation();
```

- *Type:* java.lang.Number

Specifies the number of days after which IONOS Object Storage Object Storage aborts an incomplete multipart upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#days_after_initiation S3BucketLifecycleConfiguration#days_after_initiation}

---

### S3BucketLifecycleConfigurationRuleExpiration <a name="S3BucketLifecycleConfigurationRuleExpiration" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfigurationRuleExpiration;

S3BucketLifecycleConfigurationRuleExpiration.builder()
//  .date(java.lang.String)
//  .days(java.lang.Number)
//  .expiredObjectDeleteMarker(java.lang.Boolean)
//  .expiredObjectDeleteMarker(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.property.date">date</a></code> | <code>java.lang.String</code> | Specifies the date when the object expires. Required if 'days' is not specified. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.property.days">days</a></code> | <code>java.lang.Number</code> | Specifies the number of days after object creation when the object expires. Required if 'date' is not specified. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.property.expiredObjectDeleteMarker">expiredObjectDeleteMarker</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether IONOS Object Storage Object Storage will remove a delete marker with no noncurrent versions. |

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.property.date"></a>

```java
public java.lang.String getDate();
```

- *Type:* java.lang.String

Specifies the date when the object expires. Required if 'days' is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#date S3BucketLifecycleConfiguration#date}

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

Specifies the number of days after object creation when the object expires. Required if 'date' is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#days S3BucketLifecycleConfiguration#days}

---

##### `expiredObjectDeleteMarker`<sup>Optional</sup> <a name="expiredObjectDeleteMarker" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration.property.expiredObjectDeleteMarker"></a>

```java
public java.lang.Object getExpiredObjectDeleteMarker();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether IONOS Object Storage Object Storage will remove a delete marker with no noncurrent versions.

If set to true, the delete marker will be expired; if set to false the policy takes no operation. This cannot be specified with Days or Date in a Lifecycle Expiration Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#expired_object_delete_marker S3BucketLifecycleConfiguration#expired_object_delete_marker}

---

### S3BucketLifecycleConfigurationRuleFilter <a name="S3BucketLifecycleConfigurationRuleFilter" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfigurationRuleFilter;

S3BucketLifecycleConfigurationRuleFilter.builder()
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Object key prefix identifying one or more objects to which the rule applies. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Object key prefix identifying one or more objects to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}

---

### S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration <a name="S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration;

S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration.builder()
//  .noncurrentDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration.property.noncurrentDays">noncurrentDays</a></code> | <code>java.lang.Number</code> | Specifies the number of days an object is noncurrent before IONOS Object Storage can perform the associated action. |

---

##### `noncurrentDays`<sup>Optional</sup> <a name="noncurrentDays" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration.property.noncurrentDays"></a>

```java
public java.lang.Number getNoncurrentDays();
```

- *Type:* java.lang.Number

Specifies the number of days an object is noncurrent before IONOS Object Storage can perform the associated action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_lifecycle_configuration#noncurrent_days S3BucketLifecycleConfiguration#noncurrent_days}

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference <a name="S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference;

new S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation">resetDaysAfterInitiation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysAfterInitiation` <a name="resetDaysAfterInitiation" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation"></a>

```java
public void resetDaysAfterInitiation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput">daysAfterInitiationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">daysAfterInitiation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysAfterInitiationInput`<sup>Optional</sup> <a name="daysAfterInitiationInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput"></a>

```java
public java.lang.Number getDaysAfterInitiationInput();
```

- *Type:* java.lang.Number

---

##### `daysAfterInitiation`<sup>Required</sup> <a name="daysAfterInitiation" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```java
public java.lang.Number getDaysAfterInitiation();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

---


### S3BucketLifecycleConfigurationRuleExpirationOutputReference <a name="S3BucketLifecycleConfigurationRuleExpirationOutputReference" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfigurationRuleExpirationOutputReference;

new S3BucketLifecycleConfigurationRuleExpirationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resetDate">resetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resetExpiredObjectDeleteMarker">resetExpiredObjectDeleteMarker</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDate` <a name="resetDate" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resetDate"></a>

```java
public void resetDate()
```

##### `resetDays` <a name="resetDays" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resetDays"></a>

```java
public void resetDays()
```

##### `resetExpiredObjectDeleteMarker` <a name="resetExpiredObjectDeleteMarker" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.resetExpiredObjectDeleteMarker"></a>

```java
public void resetExpiredObjectDeleteMarker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.dateInput">dateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.daysInput">daysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput">expiredObjectDeleteMarkerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.date">date</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarker">expiredObjectDeleteMarker</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration">S3BucketLifecycleConfigurationRuleExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateInput`<sup>Optional</sup> <a name="dateInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.dateInput"></a>

```java
public java.lang.String getDateInput();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.daysInput"></a>

```java
public java.lang.Number getDaysInput();
```

- *Type:* java.lang.Number

---

##### `expiredObjectDeleteMarkerInput`<sup>Optional</sup> <a name="expiredObjectDeleteMarkerInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput"></a>

```java
public java.lang.Object getExpiredObjectDeleteMarkerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.date"></a>

```java
public java.lang.String getDate();
```

- *Type:* java.lang.String

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `expiredObjectDeleteMarker`<sup>Required</sup> <a name="expiredObjectDeleteMarker" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.expiredObjectDeleteMarker"></a>

```java
public java.lang.Object getExpiredObjectDeleteMarker();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration">S3BucketLifecycleConfigurationRuleExpiration</a>

---


### S3BucketLifecycleConfigurationRuleFilterOutputReference <a name="S3BucketLifecycleConfigurationRuleFilterOutputReference" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfigurationRuleFilterOutputReference;

new S3BucketLifecycleConfigurationRuleFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter">S3BucketLifecycleConfigurationRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter">S3BucketLifecycleConfigurationRuleFilter</a>

---


### S3BucketLifecycleConfigurationRuleList <a name="S3BucketLifecycleConfigurationRuleList" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfigurationRuleList;

new S3BucketLifecycleConfigurationRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.get"></a>

```java
public S3BucketLifecycleConfigurationRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>>

---


### S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference <a name="S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference;

new S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.resetNoncurrentDays">resetNoncurrentDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoncurrentDays` <a name="resetNoncurrentDays" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.resetNoncurrentDays"></a>

```java
public void resetNoncurrentDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.noncurrentDaysInput">noncurrentDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.noncurrentDays">noncurrentDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `noncurrentDaysInput`<sup>Optional</sup> <a name="noncurrentDaysInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.noncurrentDaysInput"></a>

```java
public java.lang.Number getNoncurrentDaysInput();
```

- *Type:* java.lang.Number

---

##### `noncurrentDays`<sup>Required</sup> <a name="noncurrentDays" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.noncurrentDays"></a>

```java
public java.lang.Number getNoncurrentDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration</a>

---


### S3BucketLifecycleConfigurationRuleOutputReference <a name="S3BucketLifecycleConfigurationRuleOutputReference" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.s3_bucket_lifecycle_configuration.S3BucketLifecycleConfigurationRuleOutputReference;

new S3BucketLifecycleConfigurationRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload">putAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putNoncurrentVersionExpiration">putNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetAbortIncompleteMultipartUpload">resetAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetNoncurrentVersionExpiration">resetNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbortIncompleteMultipartUpload` <a name="putAbortIncompleteMultipartUpload" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload"></a>

```java
public void putAbortIncompleteMultipartUpload(S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putAbortIncompleteMultipartUpload.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

---

##### `putExpiration` <a name="putExpiration" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putExpiration"></a>

```java
public void putExpiration(S3BucketLifecycleConfigurationRuleExpiration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration">S3BucketLifecycleConfigurationRuleExpiration</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putFilter"></a>

```java
public void putFilter(S3BucketLifecycleConfigurationRuleFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter">S3BucketLifecycleConfigurationRuleFilter</a>

---

##### `putNoncurrentVersionExpiration` <a name="putNoncurrentVersionExpiration" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putNoncurrentVersionExpiration"></a>

```java
public void putNoncurrentVersionExpiration(S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.putNoncurrentVersionExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration</a>

---

##### `resetAbortIncompleteMultipartUpload` <a name="resetAbortIncompleteMultipartUpload" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetAbortIncompleteMultipartUpload"></a>

```java
public void resetAbortIncompleteMultipartUpload()
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetExpiration"></a>

```java
public void resetExpiration()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetNoncurrentVersionExpiration` <a name="resetNoncurrentVersionExpiration" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetNoncurrentVersionExpiration"></a>

```java
public void resetNoncurrentVersionExpiration()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUpload">abortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference">S3BucketLifecycleConfigurationRuleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference">S3BucketLifecycleConfigurationRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.noncurrentVersionExpiration">noncurrentVersionExpiration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUploadInput">abortIncompleteMultipartUploadInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.expirationInput">expirationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration">S3BucketLifecycleConfigurationRuleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter">S3BucketLifecycleConfigurationRuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.noncurrentVersionExpirationInput">noncurrentVersionExpirationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `abortIncompleteMultipartUpload`<sup>Required</sup> <a name="abortIncompleteMultipartUpload" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUpload"></a>

```java
public S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference getAbortIncompleteMultipartUpload();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference</a>

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.expiration"></a>

```java
public S3BucketLifecycleConfigurationRuleExpirationOutputReference getExpiration();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference">S3BucketLifecycleConfigurationRuleExpirationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.filter"></a>

```java
public S3BucketLifecycleConfigurationRuleFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference">S3BucketLifecycleConfigurationRuleFilterOutputReference</a>

---

##### `noncurrentVersionExpiration`<sup>Required</sup> <a name="noncurrentVersionExpiration" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.noncurrentVersionExpiration"></a>

```java
public S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference getNoncurrentVersionExpiration();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference</a>

---

##### `abortIncompleteMultipartUploadInput`<sup>Optional</sup> <a name="abortIncompleteMultipartUploadInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.abortIncompleteMultipartUploadInput"></a>

```java
public java.lang.Object getAbortIncompleteMultipartUploadInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload">S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload</a>

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.expirationInput"></a>

```java
public java.lang.Object getExpirationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpiration">S3BucketLifecycleConfigurationRuleExpiration</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilter">S3BucketLifecycleConfigurationRuleFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `noncurrentVersionExpirationInput`<sup>Optional</sup> <a name="noncurrentVersionExpirationInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.noncurrentVersionExpirationInput"></a>

```java
public java.lang.Object getNoncurrentVersionExpirationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration">S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRule">S3BucketLifecycleConfigurationRule</a>

---



