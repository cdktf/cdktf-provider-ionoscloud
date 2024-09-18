# `serverBootDeviceSelection` Submodule <a name="`serverBootDeviceSelection` Submodule" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerBootDeviceSelection <a name="ServerBootDeviceSelection" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection ionoscloud_server_boot_device_selection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server_boot_device_selection.ServerBootDeviceSelection;

ServerBootDeviceSelection.Builder.create(Construct scope, java.lang.String id)
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
    .datacenterId(java.lang.String)
    .serverId(java.lang.String)
//  .bootDeviceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ServerBootDeviceSelectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | ID of the Datacenter that holds the server for which the boot volume is selected. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.serverId">serverId</a></code> | <code>java.lang.String</code> | ID of the Server for which the boot device will be selected. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.bootDeviceId">bootDeviceId</a></code> | <code>java.lang.String</code> | ID of the entity to set as primary boot device. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#id ServerBootDeviceSelection#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

ID of the Datacenter that holds the server for which the boot volume is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#datacenter_id ServerBootDeviceSelection#datacenter_id}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.serverId"></a>

- *Type:* java.lang.String

ID of the Server for which the boot device will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#server_id ServerBootDeviceSelection#server_id}

---

##### `bootDeviceId`<sup>Optional</sup> <a name="bootDeviceId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.bootDeviceId"></a>

- *Type:* java.lang.String

ID of the entity to set as primary boot device.

Possible boot devices are CDROM Images and Volumes. If omitted, server will boot from PXE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#boot_device_id ServerBootDeviceSelection#boot_device_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#id ServerBootDeviceSelection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#timeouts ServerBootDeviceSelection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetBootDeviceId">resetBootDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.putTimeouts"></a>

```java
public void putTimeouts(ServerBootDeviceSelectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>

---

##### `resetBootDeviceId` <a name="resetBootDeviceId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetBootDeviceId"></a>

```java
public void resetBootDeviceId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServerBootDeviceSelection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server_boot_device_selection.ServerBootDeviceSelection;

ServerBootDeviceSelection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server_boot_device_selection.ServerBootDeviceSelection;

ServerBootDeviceSelection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server_boot_device_selection.ServerBootDeviceSelection;

ServerBootDeviceSelection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server_boot_device_selection.ServerBootDeviceSelection;

ServerBootDeviceSelection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServerBootDeviceSelection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServerBootDeviceSelection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServerBootDeviceSelection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServerBootDeviceSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServerBootDeviceSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.defaultBootVolumeId">defaultBootVolumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference">ServerBootDeviceSelectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.bootDeviceIdInput">bootDeviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.serverIdInput">serverIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.bootDeviceId">bootDeviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.serverId">serverId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultBootVolumeId`<sup>Required</sup> <a name="defaultBootVolumeId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.defaultBootVolumeId"></a>

```java
public java.lang.String getDefaultBootVolumeId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.timeouts"></a>

```java
public ServerBootDeviceSelectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference">ServerBootDeviceSelectionTimeoutsOutputReference</a>

---

##### `bootDeviceIdInput`<sup>Optional</sup> <a name="bootDeviceIdInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.bootDeviceIdInput"></a>

```java
public java.lang.String getBootDeviceIdInput();
```

- *Type:* java.lang.String

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.serverIdInput"></a>

```java
public java.lang.String getServerIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>

---

##### `bootDeviceId`<sup>Required</sup> <a name="bootDeviceId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.bootDeviceId"></a>

```java
public java.lang.String getBootDeviceId();
```

- *Type:* java.lang.String

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServerBootDeviceSelectionConfig <a name="ServerBootDeviceSelectionConfig" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server_boot_device_selection.ServerBootDeviceSelectionConfig;

ServerBootDeviceSelectionConfig.builder()
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
    .datacenterId(java.lang.String)
    .serverId(java.lang.String)
//  .bootDeviceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ServerBootDeviceSelectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | ID of the Datacenter that holds the server for which the boot volume is selected. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.serverId">serverId</a></code> | <code>java.lang.String</code> | ID of the Server for which the boot device will be selected. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.bootDeviceId">bootDeviceId</a></code> | <code>java.lang.String</code> | ID of the entity to set as primary boot device. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#id ServerBootDeviceSelection#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

ID of the Datacenter that holds the server for which the boot volume is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#datacenter_id ServerBootDeviceSelection#datacenter_id}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

ID of the Server for which the boot device will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#server_id ServerBootDeviceSelection#server_id}

---

##### `bootDeviceId`<sup>Optional</sup> <a name="bootDeviceId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.bootDeviceId"></a>

```java
public java.lang.String getBootDeviceId();
```

- *Type:* java.lang.String

ID of the entity to set as primary boot device.

Possible boot devices are CDROM Images and Volumes. If omitted, server will boot from PXE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#boot_device_id ServerBootDeviceSelection#boot_device_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#id ServerBootDeviceSelection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.timeouts"></a>

```java
public ServerBootDeviceSelectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#timeouts ServerBootDeviceSelection#timeouts}

---

### ServerBootDeviceSelectionTimeouts <a name="ServerBootDeviceSelectionTimeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server_boot_device_selection.ServerBootDeviceSelectionTimeouts;

ServerBootDeviceSelectionTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#create ServerBootDeviceSelection#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#default ServerBootDeviceSelection#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#delete ServerBootDeviceSelection#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#update ServerBootDeviceSelection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#create ServerBootDeviceSelection#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#default ServerBootDeviceSelection#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#delete ServerBootDeviceSelection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/server_boot_device_selection#update ServerBootDeviceSelection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServerBootDeviceSelectionTimeoutsOutputReference <a name="ServerBootDeviceSelectionTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server_boot_device_selection.ServerBootDeviceSelectionTimeoutsOutputReference;

new ServerBootDeviceSelectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>

---



