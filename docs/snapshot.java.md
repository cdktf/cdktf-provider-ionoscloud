# `snapshot` Submodule <a name="`snapshot` Submodule" id="@cdktf/provider-ionoscloud.snapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Snapshot <a name="Snapshot" id="@cdktf/provider-ionoscloud.snapshot.Snapshot"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot ionoscloud_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.snapshot.Snapshot;

Snapshot.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .volumeId(java.lang.String)
//  .cpuHotPlug(java.lang.Boolean)
//  .cpuHotPlug(IResolvable)
//  .description(java.lang.String)
//  .discVirtioHotPlug(java.lang.Boolean)
//  .discVirtioHotPlug(IResolvable)
//  .discVirtioHotUnplug(java.lang.Boolean)
//  .discVirtioHotUnplug(IResolvable)
//  .id(java.lang.String)
//  .licenceType(java.lang.String)
//  .nicHotPlug(java.lang.Boolean)
//  .nicHotPlug(IResolvable)
//  .nicHotUnplug(java.lang.Boolean)
//  .nicHotUnplug(IResolvable)
//  .ramHotPlug(java.lang.Boolean)
//  .ramHotPlug(IResolvable)
//  .secAuthProtection(java.lang.Boolean)
//  .secAuthProtection(IResolvable)
//  .timeouts(SnapshotTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#datacenter_id Snapshot#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A name of that resource. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#volume_id Snapshot#volume_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.cpuHotPlug">cpuHotPlug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#cpu_hot_plug Snapshot#cpu_hot_plug}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human readable description. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.discVirtioHotPlug">discVirtioHotPlug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#disc_virtio_hot_plug Snapshot#disc_virtio_hot_plug}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.discVirtioHotUnplug">discVirtioHotUnplug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#disc_virtio_hot_unplug Snapshot#disc_virtio_hot_unplug}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#id Snapshot#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.licenceType">licenceType</a></code> | <code>java.lang.String</code> | OS type of this Snapshot. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.nicHotPlug">nicHotPlug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#nic_hot_plug Snapshot#nic_hot_plug}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.nicHotUnplug">nicHotUnplug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#nic_hot_unplug Snapshot#nic_hot_unplug}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.ramHotPlug">ramHotPlug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#ram_hot_plug Snapshot#ram_hot_plug}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.secAuthProtection">secAuthProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean value representing if the snapshot requires extra protection e.g. two factor protection. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts">SnapshotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#datacenter_id Snapshot#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A name of that resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#name Snapshot#name}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.volumeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#volume_id Snapshot#volume_id}.

---

##### `cpuHotPlug`<sup>Optional</sup> <a name="cpuHotPlug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.cpuHotPlug"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#cpu_hot_plug Snapshot#cpu_hot_plug}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human readable description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#description Snapshot#description}

---

##### `discVirtioHotPlug`<sup>Optional</sup> <a name="discVirtioHotPlug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.discVirtioHotPlug"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#disc_virtio_hot_plug Snapshot#disc_virtio_hot_plug}.

---

##### `discVirtioHotUnplug`<sup>Optional</sup> <a name="discVirtioHotUnplug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.discVirtioHotUnplug"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#disc_virtio_hot_unplug Snapshot#disc_virtio_hot_unplug}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#id Snapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenceType`<sup>Optional</sup> <a name="licenceType" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.licenceType"></a>

- *Type:* java.lang.String

OS type of this Snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#licence_type Snapshot#licence_type}

---

##### `nicHotPlug`<sup>Optional</sup> <a name="nicHotPlug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.nicHotPlug"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#nic_hot_plug Snapshot#nic_hot_plug}.

---

##### `nicHotUnplug`<sup>Optional</sup> <a name="nicHotUnplug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.nicHotUnplug"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#nic_hot_unplug Snapshot#nic_hot_unplug}.

---

##### `ramHotPlug`<sup>Optional</sup> <a name="ramHotPlug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.ramHotPlug"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#ram_hot_plug Snapshot#ram_hot_plug}.

---

##### `secAuthProtection`<sup>Optional</sup> <a name="secAuthProtection" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.secAuthProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean value representing if the snapshot requires extra protection e.g. two factor protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#sec_auth_protection Snapshot#sec_auth_protection}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts">SnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#timeouts Snapshot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.resetCpuHotPlug">resetCpuHotPlug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.resetDiscVirtioHotPlug">resetDiscVirtioHotPlug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.resetDiscVirtioHotUnplug">resetDiscVirtioHotUnplug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.resetLicenceType">resetLicenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.resetNicHotPlug">resetNicHotPlug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.resetNicHotUnplug">resetNicHotUnplug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.resetRamHotPlug">resetRamHotPlug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.resetSecAuthProtection">resetSecAuthProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.putTimeouts"></a>

```java
public void putTimeouts(SnapshotTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts">SnapshotTimeouts</a>

---

##### `resetCpuHotPlug` <a name="resetCpuHotPlug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.resetCpuHotPlug"></a>

```java
public void resetCpuHotPlug()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDiscVirtioHotPlug` <a name="resetDiscVirtioHotPlug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.resetDiscVirtioHotPlug"></a>

```java
public void resetDiscVirtioHotPlug()
```

##### `resetDiscVirtioHotUnplug` <a name="resetDiscVirtioHotUnplug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.resetDiscVirtioHotUnplug"></a>

```java
public void resetDiscVirtioHotUnplug()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.resetId"></a>

```java
public void resetId()
```

##### `resetLicenceType` <a name="resetLicenceType" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.resetLicenceType"></a>

```java
public void resetLicenceType()
```

##### `resetNicHotPlug` <a name="resetNicHotPlug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.resetNicHotPlug"></a>

```java
public void resetNicHotPlug()
```

##### `resetNicHotUnplug` <a name="resetNicHotUnplug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.resetNicHotUnplug"></a>

```java
public void resetNicHotUnplug()
```

##### `resetRamHotPlug` <a name="resetRamHotPlug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.resetRamHotPlug"></a>

```java
public void resetRamHotPlug()
```

##### `resetSecAuthProtection` <a name="resetSecAuthProtection" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.resetSecAuthProtection"></a>

```java
public void resetSecAuthProtection()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Snapshot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.snapshot.Snapshot;

Snapshot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.snapshot.Snapshot;

Snapshot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.snapshot.Snapshot;

Snapshot.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.snapshot.Snapshot;

Snapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Snapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Snapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Snapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Snapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Snapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.cpuHotUnplug">cpuHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.discScsiHotPlug">discScsiHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.discScsiHotUnplug">discScsiHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.ramHotUnplug">ramHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference">SnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.cpuHotPlugInput">cpuHotPlugInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.discVirtioHotPlugInput">discVirtioHotPlugInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.discVirtioHotUnplugInput">discVirtioHotUnplugInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.licenceTypeInput">licenceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.nicHotPlugInput">nicHotPlugInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.nicHotUnplugInput">nicHotUnplugInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.ramHotPlugInput">ramHotPlugInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.secAuthProtectionInput">secAuthProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts">SnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.cpuHotPlug">cpuHotPlug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.discVirtioHotPlug">discVirtioHotPlug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.discVirtioHotUnplug">discVirtioHotUnplug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.licenceType">licenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.nicHotPlug">nicHotPlug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.nicHotUnplug">nicHotUnplug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.ramHotPlug">ramHotPlug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.secAuthProtection">secAuthProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cpuHotUnplug`<sup>Required</sup> <a name="cpuHotUnplug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.cpuHotUnplug"></a>

```java
public IResolvable getCpuHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `discScsiHotPlug`<sup>Required</sup> <a name="discScsiHotPlug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.discScsiHotPlug"></a>

```java
public IResolvable getDiscScsiHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `discScsiHotUnplug`<sup>Required</sup> <a name="discScsiHotUnplug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.discScsiHotUnplug"></a>

```java
public IResolvable getDiscScsiHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `ramHotUnplug`<sup>Required</sup> <a name="ramHotUnplug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.ramHotUnplug"></a>

```java
public IResolvable getRamHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.timeouts"></a>

```java
public SnapshotTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference">SnapshotTimeoutsOutputReference</a>

---

##### `cpuHotPlugInput`<sup>Optional</sup> <a name="cpuHotPlugInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.cpuHotPlugInput"></a>

```java
public java.lang.Object getCpuHotPlugInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `discVirtioHotPlugInput`<sup>Optional</sup> <a name="discVirtioHotPlugInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.discVirtioHotPlugInput"></a>

```java
public java.lang.Object getDiscVirtioHotPlugInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `discVirtioHotUnplugInput`<sup>Optional</sup> <a name="discVirtioHotUnplugInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.discVirtioHotUnplugInput"></a>

```java
public java.lang.Object getDiscVirtioHotUnplugInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenceTypeInput`<sup>Optional</sup> <a name="licenceTypeInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.licenceTypeInput"></a>

```java
public java.lang.String getLicenceTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nicHotPlugInput`<sup>Optional</sup> <a name="nicHotPlugInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.nicHotPlugInput"></a>

```java
public java.lang.Object getNicHotPlugInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nicHotUnplugInput`<sup>Optional</sup> <a name="nicHotUnplugInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.nicHotUnplugInput"></a>

```java
public java.lang.Object getNicHotUnplugInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ramHotPlugInput`<sup>Optional</sup> <a name="ramHotPlugInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.ramHotPlugInput"></a>

```java
public java.lang.Object getRamHotPlugInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secAuthProtectionInput`<sup>Optional</sup> <a name="secAuthProtectionInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.secAuthProtectionInput"></a>

```java
public java.lang.Object getSecAuthProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts">SnapshotTimeouts</a>

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `cpuHotPlug`<sup>Required</sup> <a name="cpuHotPlug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.cpuHotPlug"></a>

```java
public java.lang.Object getCpuHotPlug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `discVirtioHotPlug`<sup>Required</sup> <a name="discVirtioHotPlug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.discVirtioHotPlug"></a>

```java
public java.lang.Object getDiscVirtioHotPlug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `discVirtioHotUnplug`<sup>Required</sup> <a name="discVirtioHotUnplug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.discVirtioHotUnplug"></a>

```java
public java.lang.Object getDiscVirtioHotUnplug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenceType`<sup>Required</sup> <a name="licenceType" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.licenceType"></a>

```java
public java.lang.String getLicenceType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nicHotPlug`<sup>Required</sup> <a name="nicHotPlug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.nicHotPlug"></a>

```java
public java.lang.Object getNicHotPlug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nicHotUnplug`<sup>Required</sup> <a name="nicHotUnplug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.nicHotUnplug"></a>

```java
public java.lang.Object getNicHotUnplug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ramHotPlug`<sup>Required</sup> <a name="ramHotPlug" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.ramHotPlug"></a>

```java
public java.lang.Object getRamHotPlug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secAuthProtection`<sup>Required</sup> <a name="secAuthProtection" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.secAuthProtection"></a>

```java
public java.lang.Object getSecAuthProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.Snapshot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.snapshot.Snapshot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SnapshotConfig <a name="SnapshotConfig" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.snapshot.SnapshotConfig;

SnapshotConfig.builder()
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
    .name(java.lang.String)
    .volumeId(java.lang.String)
//  .cpuHotPlug(java.lang.Boolean)
//  .cpuHotPlug(IResolvable)
//  .description(java.lang.String)
//  .discVirtioHotPlug(java.lang.Boolean)
//  .discVirtioHotPlug(IResolvable)
//  .discVirtioHotUnplug(java.lang.Boolean)
//  .discVirtioHotUnplug(IResolvable)
//  .id(java.lang.String)
//  .licenceType(java.lang.String)
//  .nicHotPlug(java.lang.Boolean)
//  .nicHotPlug(IResolvable)
//  .nicHotUnplug(java.lang.Boolean)
//  .nicHotUnplug(IResolvable)
//  .ramHotPlug(java.lang.Boolean)
//  .ramHotPlug(IResolvable)
//  .secAuthProtection(java.lang.Boolean)
//  .secAuthProtection(IResolvable)
//  .timeouts(SnapshotTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#datacenter_id Snapshot#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.name">name</a></code> | <code>java.lang.String</code> | A name of that resource. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#volume_id Snapshot#volume_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.cpuHotPlug">cpuHotPlug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#cpu_hot_plug Snapshot#cpu_hot_plug}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human readable description. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.discVirtioHotPlug">discVirtioHotPlug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#disc_virtio_hot_plug Snapshot#disc_virtio_hot_plug}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.discVirtioHotUnplug">discVirtioHotUnplug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#disc_virtio_hot_unplug Snapshot#disc_virtio_hot_unplug}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#id Snapshot#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.licenceType">licenceType</a></code> | <code>java.lang.String</code> | OS type of this Snapshot. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.nicHotPlug">nicHotPlug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#nic_hot_plug Snapshot#nic_hot_plug}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.nicHotUnplug">nicHotUnplug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#nic_hot_unplug Snapshot#nic_hot_unplug}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.ramHotPlug">ramHotPlug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#ram_hot_plug Snapshot#ram_hot_plug}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.secAuthProtection">secAuthProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean value representing if the snapshot requires extra protection e.g. two factor protection. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts">SnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#datacenter_id Snapshot#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name of that resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#name Snapshot#name}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#volume_id Snapshot#volume_id}.

---

##### `cpuHotPlug`<sup>Optional</sup> <a name="cpuHotPlug" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.cpuHotPlug"></a>

```java
public java.lang.Object getCpuHotPlug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#cpu_hot_plug Snapshot#cpu_hot_plug}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human readable description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#description Snapshot#description}

---

##### `discVirtioHotPlug`<sup>Optional</sup> <a name="discVirtioHotPlug" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.discVirtioHotPlug"></a>

```java
public java.lang.Object getDiscVirtioHotPlug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#disc_virtio_hot_plug Snapshot#disc_virtio_hot_plug}.

---

##### `discVirtioHotUnplug`<sup>Optional</sup> <a name="discVirtioHotUnplug" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.discVirtioHotUnplug"></a>

```java
public java.lang.Object getDiscVirtioHotUnplug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#disc_virtio_hot_unplug Snapshot#disc_virtio_hot_unplug}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#id Snapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenceType`<sup>Optional</sup> <a name="licenceType" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.licenceType"></a>

```java
public java.lang.String getLicenceType();
```

- *Type:* java.lang.String

OS type of this Snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#licence_type Snapshot#licence_type}

---

##### `nicHotPlug`<sup>Optional</sup> <a name="nicHotPlug" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.nicHotPlug"></a>

```java
public java.lang.Object getNicHotPlug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#nic_hot_plug Snapshot#nic_hot_plug}.

---

##### `nicHotUnplug`<sup>Optional</sup> <a name="nicHotUnplug" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.nicHotUnplug"></a>

```java
public java.lang.Object getNicHotUnplug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#nic_hot_unplug Snapshot#nic_hot_unplug}.

---

##### `ramHotPlug`<sup>Optional</sup> <a name="ramHotPlug" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.ramHotPlug"></a>

```java
public java.lang.Object getRamHotPlug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#ram_hot_plug Snapshot#ram_hot_plug}.

---

##### `secAuthProtection`<sup>Optional</sup> <a name="secAuthProtection" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.secAuthProtection"></a>

```java
public java.lang.Object getSecAuthProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean value representing if the snapshot requires extra protection e.g. two factor protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#sec_auth_protection Snapshot#sec_auth_protection}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.snapshot.SnapshotConfig.property.timeouts"></a>

```java
public SnapshotTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts">SnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#timeouts Snapshot#timeouts}

---

### SnapshotTimeouts <a name="SnapshotTimeouts" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.snapshot.SnapshotTimeouts;

SnapshotTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#create Snapshot#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#default Snapshot#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#delete Snapshot#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#update Snapshot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#create Snapshot#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#default Snapshot#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#delete Snapshot#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/snapshot#update Snapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SnapshotTimeoutsOutputReference <a name="SnapshotTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.snapshot.SnapshotTimeoutsOutputReference;

new SnapshotTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts">SnapshotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.snapshot.SnapshotTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.snapshot.SnapshotTimeouts">SnapshotTimeouts</a>

---



