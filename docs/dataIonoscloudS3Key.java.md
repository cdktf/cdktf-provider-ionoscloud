# `dataIonoscloudS3Key` Submodule <a name="`dataIonoscloudS3Key` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudS3Key <a name="DataIonoscloudS3Key" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key ionoscloud_s3_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_key.DataIonoscloudS3Key;

DataIonoscloudS3Key.Builder.create(Construct scope, java.lang.String id)
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
    .id(java.lang.String)
    .userId(java.lang.String)
//  .timeouts(DataIonoscloudS3KeyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Id of the key. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | The ID of the user that owns the key. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts">DataIonoscloudS3KeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Id of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#id DataIonoscloudS3Key#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

The ID of the user that owns the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#user_id DataIonoscloudS3Key#user_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts">DataIonoscloudS3KeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#timeouts DataIonoscloudS3Key#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.putTimeouts"></a>

```java
public void putTimeouts(DataIonoscloudS3KeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts">DataIonoscloudS3KeyTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudS3Key resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_key.DataIonoscloudS3Key;

DataIonoscloudS3Key.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_key.DataIonoscloudS3Key;

DataIonoscloudS3Key.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_key.DataIonoscloudS3Key;

DataIonoscloudS3Key.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_key.DataIonoscloudS3Key;

DataIonoscloudS3Key.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataIonoscloudS3Key.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataIonoscloudS3Key resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataIonoscloudS3Key to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataIonoscloudS3Key that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudS3Key to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference">DataIonoscloudS3KeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts">DataIonoscloudS3KeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.timeouts"></a>

```java
public DataIonoscloudS3KeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference">DataIonoscloudS3KeyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts">DataIonoscloudS3KeyTimeouts</a>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3Key.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudS3KeyConfig <a name="DataIonoscloudS3KeyConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_key.DataIonoscloudS3KeyConfig;

DataIonoscloudS3KeyConfig.builder()
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
    .id(java.lang.String)
    .userId(java.lang.String)
//  .timeouts(DataIonoscloudS3KeyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Id of the key. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | The ID of the user that owns the key. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts">DataIonoscloudS3KeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Id of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#id DataIonoscloudS3Key#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

The ID of the user that owns the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#user_id DataIonoscloudS3Key#user_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyConfig.property.timeouts"></a>

```java
public DataIonoscloudS3KeyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts">DataIonoscloudS3KeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#timeouts DataIonoscloudS3Key#timeouts}

---

### DataIonoscloudS3KeyTimeouts <a name="DataIonoscloudS3KeyTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_key.DataIonoscloudS3KeyTimeouts;

DataIonoscloudS3KeyTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#create DataIonoscloudS3Key#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#default DataIonoscloudS3Key#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#delete DataIonoscloudS3Key#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#update DataIonoscloudS3Key#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#create DataIonoscloudS3Key#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#default DataIonoscloudS3Key#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#delete DataIonoscloudS3Key#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/s3_key#update DataIonoscloudS3Key#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudS3KeyTimeoutsOutputReference <a name="DataIonoscloudS3KeyTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_s3_key.DataIonoscloudS3KeyTimeoutsOutputReference;

new DataIonoscloudS3KeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts">DataIonoscloudS3KeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Key.DataIonoscloudS3KeyTimeouts">DataIonoscloudS3KeyTimeouts</a>

---



